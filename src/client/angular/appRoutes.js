angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
            title: 'Home',
            templateUrl: '/templates/home/home.view.html',
            controller: 'HomeController'
        })

        .when('/home', {
            redirectTo: '/'
        })

        .when('/portfolio', {
            title: 'Portfolio',
            templateUrl: '/templates/portfolio/portfolio.view.html',
            controller: 'PortfolioController'
        })

        .when('/experience', {
            title: 'Experience',
            templateUrl: '/templates/experience/experience.view.html',
            controller: 'ExperienceController'
        });

        // .otherwise({
        //     templateUrl:'errors/404.view.jade'
        // });


    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

}]);