angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
            templateUrl: '/templates/home/home.view.html',
            controller: 'HomeController'
        })

        .when('/portfolio', {
            templateUrl: '/templates/portfolio/portfolio.view.html',
            controller: 'PortfolioController'
        });

        // .otherwise({
        //     templateUrl:'errors/404.view.jade'
        // });


    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

}]);