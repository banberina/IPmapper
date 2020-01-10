module.exports = (router, db, mongojs, jwt, config, ip) => {

    router.use((req, res, next) => {
        console.log(`User route accessed by: ${ip.address()}`); // log visits

        /* Check for proper JWT */
        let authorization = req.get('Authorization');
        if (authorization) {
            jwt.verify(authorization, process.env.JWT_SECRET || config.JWT_SECRET, (error, decoded) => {
                if (error) {
                    res.status(401).send({ message: 'Unauthorized access: ' + error.message });
                } else {
                    let userType = decoded.type;
                    if (userType === 'user' || userType === 'admin') {
                        next();
                    } else {
                        res.status(401).send({ message: 'Unauthorized access: improper privileges' });
                    }
                }
            });
        } else {
            res.status(401).send({ message: 'Unauthorized access.' });
        }
    })

    /* Visit-logging middleware */
    router.use((req, res, next, mongojs, db, config) => {
        console.log(`New visit from ${ip.address()} at ${new Date()}`); // log visits
        next();
    });

 /*    router.get('/asn/:ip',(req, res)  => {
        var ip = req.params.ip;
        var ipint=ipInt(ip).toInt();
        console.log(ipint);
        db.asn.findOne({$and:[{ipfrom:{$lte:ipint}},{ipto:{$gte:ipint}}]}, (error, docs) => {
            if (error) {
                throw error;
            }
            res.json(docs);
            res.status(200);
        }); 
    }); */

}