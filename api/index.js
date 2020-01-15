const express = require('express');
const mongojs = require('mongojs');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const ipInt = require('ip-to-int');
const ip = require('ip');

/* Configuration import */
let config;
if (!process.env.HEROKU) {
    config = require('./config');
}

const app = express();
const port = process.env.PORT || 4000;
const CLIENT_URL = process.env.CLIENT_URL  || config.CLIENT_URL;

const db = mongojs(process.env.MONGODB_URL || config.MONGODB_URL);


app.use(bodyParser.json());
app.use(cors());


/* Global middleware */
app.use((req, res, next) => {
    console.log('Server time: ', Date.now());
    next();
});


const { google } = require('googleapis');
const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID || config.CLIENT_ID,
    process.env.CLIENT_SECRET || config.CLIENT_SECRET,
    process.env.REDIRECT_URL || config.REDIRECT_URL
);



app.get('/login', (req, res) => {
    let code = req.query.code;
    /* If redirected from Google API */
    if (code) {
        oauth2Client.getToken(code).then((result) => {
            oauth2Client.setCredentials({ access_token: result.tokens.access_token });
            let oauth2 = google.oauth2({
                auth: oauth2Client,
                version: 'v2'
            });

            oauth2.userinfo.get((err, response) => {
                if (err) {
                    throw err;
                }
                let data = response.data;

                db.users.findAndModify({
                    query: { email: data.email },
                    update: { $setOnInsert: { email: data.email, name: data.name, signup_time: new Date(), type: 'user' } },
                    new: true,
                    upsert: true
                }, (error, doc) => {
                    if (error) {
                        res.status(404).json({ message: error.errmsg })
                    }
                    let jwtToken = jwt.sign({
                        ...data,
                        exp: (Math.floor(Date.now() / 1000) + 3600), // token which lasts for an hour
                        id: doc._id,
                        role: doc.type
                    }, process.env.JWT_SECRET || config.JWT_SECRET);
                    res.redirect(`${CLIENT_URL}/auth#jwt=${jwtToken}`);  /* Output the JWT */
                });
            });
        });
        /* If coming to the login URL for the first time */
    } else {
        const scopes = [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ];

        const url = oauth2Client.generateAuthUrl({
            access_type: 'online',
            scope: scopes
        });
        res.redirect(url);
    }
});

/* App version endpoint */
app.get('/version', (req, res) => {
    res.json({
        app_name: 'IPmapper',
        version: 'v1.0.0'
    });
    res.status(200);
});

app.get('/current', (req, res) => {
    var currentip = ipInt(ip.address()).toInt();
    console.log(currentip);
    db.geo.findOne({ $and: [{ ipfrom: { $lte: currentip } }, { ipto: { $gte: currentip } }] }, (error, docs) => {
        if (error) {
            throw error;
        }
        res.json(docs);
        res.status(200);
    });

});

app.get('/geo/:ip', (req, res) => {
    var ip = req.params.ip;
    var ipint = ipInt(ip).toInt();
    console.log(ipint);
    db.geo.findOne({ $and: [{ ipfrom: { $lte: ipint } }, { ipto: { $gte: ipint } }] }, (error, docs) => {
        if (error) {
            throw error;
        }
        res.json(docs);
        res.status(200);
    });
});


app.get('/proxy/:ip', (req, res) => {
    var ip = req.params.ip;
    var ipint = ipInt(ip).toInt();
    console.log(ipint);
    db.proxy.findOne({ $and: [{ ipfrom: { $lte: ipint } }, { ipto: { $gte: ipint } }] }, (error, docs) => {
        if (error) {
            throw error;
        }
        res.json(docs);
        res.status(200);
    });
});

app.get('/asn/:ip', (req, res) => {
    var ip = req.params.ip;
    var ipint = ipInt(ip).toInt();
    console.log(ipint);
    db.asn.findOne({ $and: [{ ipfrom: { $lte: ipint } }, { ipto: { $gte: ipint } }] }, (error, docs) => {
        if (error) {
            throw error;
        }
        res.json(docs);
        res.status(200);
    });
});

let admin_router = express.Router();
require('./routes/admin.js')(admin_router, db, mongojs, jwt, config);
app.use('/admin', admin_router);


let user_router = express.Router();
require('./routes/user.js')(user_router, db, mongojs, jwt, config);
app.use('/user', user_router);

app.use('/',express.static('./../frontend/build'));
app.get('/*',function (req,res) {
    res.sendFile(path.join(__dirname,'./../frontend/build/index.html'), function(err) {
        if (err) {
          res.status(500).send(err)
        }
      })
    
})

app.listen(port, () => console.log(`IPMapper listening on port ${port}!`)); 