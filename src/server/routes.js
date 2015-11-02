//var Portfolio = require('./models/portfolio');
var navigation = require('./data/navigation');
var portfolioList = require('./data/portfolio/list');
var portfolioDetail = require('./data/portfolio/detail');
var experience = require('./data/experience/experience');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes
    app.get('/api/navigation', function(req, res) {
        res.json(201, navigation.items);
    });

    app.get('/api/portfolio', function(req, res) {
        res.json(201, portfolioList);
    });

    app.get('/api/portfolio/preview/:id', function(req, res) {
        var id = req.params.id;
        var items = portfolioList;
        for(var i = 0; i < items.length; i++) {
            var item = items[i];
            if(item.id == id) {
                res.json(201, item);
            }
        }        
    });

    app.get('/api/portfolio/:id', function(req, res) {
        var id = req.params.id;
        var items = portfolioDetail;
        for(var i = 0; i < items.length; i++) {
            var item = items[i];
            if(item.id == id) {
                res.json(201, item.item);
            }
        }
    });

    app.get('/api/experience', function(req, res) {
        res.json(201, experience);
    });


    // frontend routes =========================================================
    
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.render('index', function(err, html) {
            res.send(html);
        });
    });

};