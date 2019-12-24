module.exports = (router, db, mongojs, jwt, config) => {
    
    router.use((req, res, next) => {
        console.log(`User route accessed by: ${req.ip}` ); // log visits

        /* Check for proper JWT */
        let authorization = req.get('Authorization');
        if (authorization) {
            jwt.verify(authorization, process.env.JWT_SECRET || config.JWT_SECRET, (error, decoded) => {
                if (error) {
                    res.status(401).send({ message: 'Unauthorized access: ' + error.message });
                } else {
                    let userType = decoded.type;
                    if (userType === 'user' || userType==='admin') {
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
}