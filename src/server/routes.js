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

    app.get('/api/portfolio/preview/:base/:title', function(req, res) {
        var base = req.params.base;
        var urlTitle = req.params.title;
        var items = portfolioList;
        for(var i = 0; i < items.length; i++) {
            var item = items[i];
            if(item.urlBase == base && item.urlTitle == urlTitle) {
                res.json(201, item);
            }
        }        
    });

    app.get('/api/portfolio/:base/:title', function(req, res) {
        var base = req.params.base;
        var urlTitle = req.params.title;
        var items = portfolioDetail;
        for(var i = 0; i < items.length; i++) {
            var item = items[i];
            if(item.urlBase == base && item.urlTitle == urlTitle) {
                res.json(201, item.item);
            }
        }
    });

    app.get('/api/experience', function(req, res) {
        res.json(201, experience);
    });


    // redirects from old site =================================================

    app.get('/Default.aspx', function(req, res) {
        res.redirect(301, '/');
    });

    app.get('/portfolio.aspx', function(req, res) {
        res.redirect(301, '/portfolio');
    });

    app.get('/experience.aspx', function(req, res) {
        res.redirect(301, '/experience');
    });

    app.get('/contact.aspx', function(req, res) {
        res.redirect(301, '/contact');
    });

    app.get('/portfolio/Default.aspx', function(req, res) {
        var pageId = req.query.id;
        if(pageId) {
            switch(pageId) {
                case "1": pageUrl = '/tweeters/website'; break;
                case "3": pageUrl = '/ecoplumbers/logo'; break;
                case "4": pageUrl = '/photographic-creations/website'; break;
                case "5": pageUrl = '/shiloh-hall/logo'; break;
                case "6": pageUrl = '/shiloh-hall/website'; break;
                case "7": pageUrl = '/mbbs/logo'; break;
                case "8": pageUrl = '/mbbs/website'; break;
                case "9": pageUrl = '/brighthouse/email'; break;
                case "10": pageUrl = '/crocs/microsites'; break;
                case "12": pageUrl = '/mars/landing-page'; break;
                case "13": pageUrl = '/tigi/microsite'; break;
                case "14": pageUrl = '/diebold/microsites'; break;
                case "15": pageUrl = '/mtd/microsites'; break;
                case "16": pageUrl = '/charter/landing-pages'; break;
                case "17": pageUrl = '/invacare/microsites'; break;
                case "19": pageUrl = ''; break;
                case "20": pageUrl = '/westjet/mobile'; break;
                case "21": pageUrl = '/xfinity/microsites'; break;
                case "22": pageUrl = '/charter/landing-page'; break;
                default: pageUrl = '';
            };

            res.redirect(301, '/portfolio' + pageUrl);
        } else {
            res.redirect(301, '/portfolio');
        }
    });

    // frontend routes =========================================================
    
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.render('index', function(err, html) {
            res.send(html);
        });
    });

};