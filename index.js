const express = require ('express');
const mongojs = require('mongojs');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

let config;
if (!process.env.HEROKU)
{
    config=require('./config');
}


//Mongo DB connection
const app = express();
const port= process.env.PORT||4000;

const db=mongojs(process.env.MONGODB_URL || config.MONGODB_URL);


app.use(express.static('public'));
app.use(bodyParser.json());

/* Global middleware */
app.use((req, res, next) => {
    console.log('Server time: ', Date.now());
    next();
});

let admin_router=express.Router();
require('./api/routes/admin.js')(admin_router,db,mongojs,jwt,config);
app.use('/admin',admin_router);

let public_router = express.Router();
require('./api/routes/public.js')(public_router);
app.use('/public', public_router);

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
          oauth2Client.setCredentials({access_token: result.tokens.access_token});
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
                      console.log(error);
                  }
                  let jwtToken = jwt.sign({
                      ...data,
                      exp: (Math.floor(Date.now() / 1000) + 3600), // token which lasts for an hour
                      id: doc._id,
                      type: doc.type
                  }, process.env.JWT_SECRET || config.JWT_SECRET);
                  /* Output the JWT */
                  res.json({ 'jwt' : jwtToken });
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

/* // Basic CRUD operations
app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    db.items.findOne({ _id: mongojs.ObjectId(id) }, (error, docs) => {
        if (error) {
            throw error;
        }
        res.json(docs);
    });
});

app.post('/users',(req,res)=> {
    db.users.insert(req.body,(error,docs)=>{
        res.json(docs);
    });
});

app.put('/users/:id', (req, res) => {
    let id = req.params.id;
    let userUpdate = req.body;
    db.items.findAndModify({ 
        query: { _id: mongojs.ObjectId(id) }, update: { $set: userUpdate }, new: true
    }, (error, docs) => {
        res.json(docs);
    })
});

app.delete('/users/:id', (req, res) => {
    let id = req.params.id;
    db.items.remove({ _id: mongojs.ObjectId(id) }, [true], (error, docs) => {
        if (error) {
            throw error;
        }
        res.json(docs);
    });
});

//Pagination
app.get('/data',(req,res)=>{
    let limit = Number(req.query.limit)||10;
    let skip = Number(req.query.skip)||0;
    db.geo.find({}).skip(skip).limit(limit,(error,docs)=> {
        if(error) {
            throw error;
        }
        res.json(docs);
    });
}); */

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 