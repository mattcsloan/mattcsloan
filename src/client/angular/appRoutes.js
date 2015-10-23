angular.module('appRoutes', []).config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider

        .state('home', {
            url: '/',
            templateUrl: '/templates/home/home.view.html',
            controller: 'HomeController'
        })

        .state('portfolio', {
            url: '/portfolio',
            templateUrl: '/templates/portfolio/portfolio.view.html',
            controller: 'PortfolioController'
        })

            .state('portfolio.detail', {
                url: '/:portfolioId',
                templateUrl: '/templates/portfolio/detail/detail.view.html',
                controller: 'PortfolioDetailController',
                resolve: {
                    portfolioId: ['$stateParams', function($stateParams){
                        console.log($stateParams.portfolioId);
                        return $stateParams.portfolioId;
                    // }],
                    // portfolioDetail: ['$stateParams', function($stateParams){
                    //   $http.get('/api/portfolio/' + $stateParams.portfolioId)
                    //     .success(function (res) {
                    //       return res;
                    //     });
                    // }],
                    // portfolioPreview: ['$stateParams', function($stateParams){
                    //   $http.get('/api/portfolio/preview/' + $stateParams.portfolioId)
                    //     .success(function (res) {
                    //       return res;
                    //     });
                    }]
                }
            })


        .state('experience', {
            url: '/experience',
            templateUrl: '/templates/experience/experience.view.html',
            controller: 'ExperienceController'
        })

        .state('contact', {
            url: '/contact',
            templateUrl: '/templates/contact/contact.view.html',
            controller: 'ContactController'
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

}]);