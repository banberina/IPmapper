module.exports = (router) => {

    /* Visit-logging middleware */
    router.use((req, res, next) => {
        console.log(`New visit from ${req.ip} at ${new Date()}` ); // log visits
        next();
    });
  /* App version endpoint */
  router.get('/version', (req, res) => {
    res.json({
        app_name: 'IPmapper',
        version: 'v1.0.0'
    });
});
}