//var Portfolio = require('./models/portfolio');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes



    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.render('index.jade', function(err, html) {
            res.send(html);
        });
    });

};