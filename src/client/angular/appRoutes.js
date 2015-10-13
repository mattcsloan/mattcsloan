angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
            templateUrl: '/templates/home/home.view.html',
            controller: 'HomeController'
        })

        .when('/home', {
            redirectTo: '/'
        })

        .when('/portfolio/:id', {
            templateUrl: '/templates/portfolio/detail/detail.view.html',
            controller: 'PortfolioDetailController'
        })

        .when('/portfolio', {
            templateUrl: '/templates/portfolio/portfolio.view.html',
            controller: 'PortfolioController'
        })

        .when('/experience', {
            templateUrl: '/templates/experience/experience.view.html',
            controller: 'ExperienceController'
        })

        .when('/contact', {
            templateUrl: '/templates/contact/contact.view.html',
            controller: 'ContactController'
        });

        // .otherwise({
        //     templateUrl:'errors/404.view.jade'
        // });


    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

}]);