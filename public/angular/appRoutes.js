angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'angular/main/main.view.jade',
            controller: 'MainController'
        })

        .when('/portfolio', {
            templateUrl: 'angular/portfolio/portfolio.view.jade',
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