//var Portfolio = require('./models/portfolio');
var navigation = require('./data/navigation');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes
    app.get('/api/navigation', function(req, res) {
        res.json(201, navigation.items);
    });


    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.render('index', function(err, html) {
            res.send(html);
        });
    });

};