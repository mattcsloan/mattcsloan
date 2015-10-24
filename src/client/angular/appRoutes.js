angular.module('appRoutes', []).config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider

        .state('home', {
            url: '/',
            views: {
                content: {
                    templateUrl: '/templates/home/home.view.html',
                    controller: 'HomeController'
                }
            }
        })

        .state('portfolio', {
            url: '/portfolio',
            views: {
                content: {
                    templateUrl: '/templates/portfolio/portfolio.view.html',
                    controller: 'PortfolioController'
                },
                footer: {
                    templateUrl: '/templates/_common/templates/footer.tmpl.html',
                }
            }
        })

            .state('portfolio.detail', {
                url: '/:portfolioId',
                views: {
                    content: {
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
                    },
                    footer: {
                        templateUrl: '/templates/_common/templates/footer.tmpl.html',
                    }
                }
            })


        .state('experience', {
            url: '/experience',
            views: {
                content: {
                    templateUrl: '/templates/experience/experience.view.html',
                    controller: 'ExperienceController'
                },
                footer: {
                    templateUrl: '/templates/_common/templates/footer.tmpl.html',
                }
            }
        })

        .state('contact', {
            url: '/contact',
            views: {
                content: {
                    templateUrl: '/templates/contact/contact.view.html',
                    controller: 'ContactController'
                },
                footer: {
                    templateUrl: '/templates/_common/templates/footer.tmpl.html',
                }
            }
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

}]);