const express = require ('express');
const app = express();
const port= process.env.PORT||4000;

var Router =require('router');
var router =new Router();

/*Mongo DB connection*/
const mongojs=require('mongojs');
const db=mongojs('mongodb+srv://admin:admin@cluster0-vqejn.mongodb.net/ipmapper?retryWrites=true&w=majority');

/*Body parser */
const bodyParser = require('body-parser');
app.use(bodyParser.json());

/*Middleware to serve static content*/
app.use(express.static('public'));

app.listen(port,()=>{
    console.log('Server started at port:'+port);
});

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

app.post('/users',(req,res)=> {
    db.users.insert(req.body,(error,docs)=>{
        res.json(docs);
    });
});
