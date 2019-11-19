module.exports = (router, db, mongojs, jwt, config) => {

    router.use((req, res, next) => {
        console.log(`Admin route accessed by: ${req.ip}` ); // log visits

        /* Check for proper JWT */
        let authorization = req.get('Authorization');
        if (authorization) {
            jwt.verify(authorization, process.env.JWT_SECRET || config.JWT_SECRET, (error, decoded) => {
                if (error) {
                    res.status(401).send({ message: 'Unauthorized access: ' + error.message });
                } else {
                    let userType = decoded.type;
                    if (userType === 'admin') {
                        next();
                    } else {
                        res.status(401).send({ message: 'Unauthorized access: improper privileges'});
                    }
                }
            });
        } else {
            res.status(401).send({ message: 'Unauthorized access.' });
        }
    })

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

    /* POST operations */

     router.post('/asn',(req,res)=> { 
        db.asn.insert(req.body,(error,docs)=>
        {
            res.json(docs);
        });
    }); 

    router.post('/geo',(req,res)=> { 
        db.geo.insert(req.body,(error,docs)=>
        {
            res.json(docs);
        });
    }); 
    router.post('/geoipv6',(req,res)=> { 
        db.geoIPv6.insert(req.body,(error,docs)=>
        {
            res.json(docs);
        });
    }); 
    router.post('/proxy',(req,res)=> { 
        db.proxy.insert(req.body,(error,docs)=>
        {
            res.json(docs);
        });
    }); 

    router.post('/user',(req,res)=> { 
        db.users.insert(req.body,(error,docs)=>
        {
            res.json(docs);
        });
    }); 

    /* UPDATE operations */

    router.put('/asn/:id',(req,res)=> {
        let id=req.params.id;
        let itemUpdate=req.body;
        db.asn.updateOne({_id:mongojs.ObjectId(id)},{$set:itemUpdate},(error,docs)=> {
            res.json(docs);
        });
    });

    router.put('/geo/:id',(req,res)=> {
        let id=req.params.id;
        let itemUpdate=req.body;
        db.geo.updateOne({_id:mongojs.ObjectId(id)},{$set:itemUpdate},(error,docs)=> {
            res.json(docs);
        });
    });

    router.put('/geoipv6/:id',(req,res)=> {
        let id=req.params.id;
        let itemUpdate=req.body;
        db.geoIPv6.updateOne({_id:mongojs.ObjectId(id)},{$set:itemUpdate},(error,docs)=> {
            res.json(docs);
        });
    });

    router.put('/proxy/:id',(req,res)=> {
        let id=req.params.id;
        let itemUpdate=req.body;
        db.proxy.updateOne({_id:mongojs.ObjectId(id)},{$set:itemUpdate},(error,docs)=> {
            res.json(docs);
        });
    });

    router.put('/user/:id',(req,res)=> {
        let id=req.params.id;
        let itemUpdate=req.body;
        db.users.updateOne({_id:mongojs.ObjectId(id)},{$set:itemUpdate},(error,docs)=> {
            res.json(docs);
        });
    });

    /* DELETE operations */

    router.delete('/asn/:id',(req,res)=> {
        let id=req.params.id;
        db.asn.remove({_id:mongojos.ObjectId(id)},[true],(error,docs)=> {
            res.json(docs);
        });
    });

    router.delete('/geo/:id',(req,res)=> {
        let id=req.params.id;
        db.geo.remove({_id:mongojos.ObjectId(id)},[true],(error,docs)=> {
            res.json(docs);
        });
    });

    router.delete('/geoipv6/:id',(req,res)=> {
        let id=req.params.id;
        db.geoipv6.remove({_id:mongojos.ObjectId(id)},[true],(error,docs)=> {
            res.json(docs);
        });
    });

    router.delete('/proxy/:id',(req,res)=> {
        let id=req.params.id;
        db.proxy.remove({_id:mongojos.ObjectId(id)},[true],(error,docs)=> {
            res.json(docs);
        });
    });
    router.delete('/user/:id',(req,res)=> {
        let id=req.params.id;
        db.users.remove({_id:mongojos.ObjectId(id)},[true],(error,docs)=> {
            res.json(docs);
        });
    });


}