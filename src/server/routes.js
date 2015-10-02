//var Portfolio = require('./models/portfolio');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes
    app.get('/api/navigation', function(req, res) {
        // var navigation = require('data/navigation');
        var navigation = [
            {
              key: 'home',
              label: 'Home',
              url: '/home'
            },
            {
              key: 'portfolio',
              label: 'Portfolio',
              url: '/portfolio'
            }  
        ];

        res.json(201, navigation);
    });


    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.render('index', function(err, html) {
            res.send(html);
        });
    });

};