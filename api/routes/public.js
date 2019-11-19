module.exports = (router) => {

    /* Visit-logging middleware */
    router.use((req, res, next, mongojs, db,config) => {
        console.log(`New visit from ${req.ip} at ${new Date()}` ); // log visits
        next();
    });

    router.get('/',(req,res)=>{
        let limit = Number(req.query.limit)||10;
        let skip = Number(req.query.skip)||0;
        db.geo.find({}).skip(skip).limit(limit,(error,docs)=> {
            if(error) {
                throw error;
            }
            res.json(docs);
        });
    }); 

  /* App version endpoint */
  router.get('/version', (req, res) => {
    res.json({
        app_name: 'IPmapper',
        version: 'v1.0.0'
    });
});


router.get('/data/:id',(req,res,db,config)=>{
    let id=req.params.id;
    db.geo.aggregate([
        {$match:{geo_id:mongojs.ObjectId(id)}},
        {$lookup: {from: 'proxy',localField:"_id",foreignField:'_id', as:"proxy"}},
      //  {unwind:'$proxy'},
        {$project:{ip_addressfrom:'$geo.ipfrom',ip_addressto:"$geo.ipto"}}],
        (error, docs) => {
            if(error){throw error;}
        res.json(docs);
});
});
}