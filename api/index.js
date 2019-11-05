const express = require ('express');
const app = express();
const port= process.env.PORT||4000;


//Mongo DB connection
const mongojs=require('mongojs');
const db=mongojs('mongodb+srv://admin:admin@cluster0-vqejn.mongodb.net/ipmapper?retryWrites=true&w=majority');

//Body parser 
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//Middleware to serve static content
app.use(express.static('public'));

// Basic CRUD operations
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
});

app.listen(port,()=>{
    console.log('Server started at port:'+port);
});