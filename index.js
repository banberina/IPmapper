const express = require ('express');
const app = express();
const port= process.env.PORT||4000;

app.use('/',(req,res,next)=> {
    console.log('New visit from'+req.ip);
    next();
});

app.listen(port,()=>{
    console.log('Server started at port:'+port);
});

app.get('/',(req,res)=>{
    res.send('Hello world');
})
