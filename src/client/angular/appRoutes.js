angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
            templateUrl: '/templates/main/main.view.html',
            controller: 'MainController'
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