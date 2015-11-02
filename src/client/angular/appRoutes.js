angular.module('appRoutes', []).config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider

        .state('home', {
            url: '/',
            views: {
                content: {
                    templateUrl: '/templates/home/home.view.html',
                    controller: 'HomeController',
                    controllerAs: 'home'
                }
            }
        })

        .state('portfolio', {
            url: '/portfolio',
            views: {
                content: {
                    templateUrl: '/templates/portfolio/portfolio.view.html',
                },
                footer: {
                    templateUrl: '/templates/_common/templates/footer.tmpl.html',
                }
            },
            redirectTo: 'portfolio.index'
        })

            .state('portfolio.index', {
                url: '',
                views: {
                    portfolio: {
                        templateUrl: '/templates/portfolio/index/index.view.html',
                        controller: 'PortfolioController',
                        controllerAs: 'portfolio'
                    }
                }
            })

            .state('portfolio.detail', {
                url: '/:portfolioId',
                views: {
                    portfolio: {
                        templateUrl: '/templates/portfolio/detail/detail.view.html',
                        controller: 'PortfolioDetailController',
                        controllerAs: 'detail',
                        resolve: {
                            portfolioId: ['$stateParams', function($stateParams){
                                return $stateParams.portfolioId;
                            }]
                        }
                    }
                }
            })


        .state('experience', {
            url: '/experience',
            views: {
                content: {
                    templateUrl: '/templates/experience/experience.view.html',
                    controller: 'ExperienceController',
                    controllerAs: 'experience'
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
                    controller: 'ContactController',
                    controllerAs: 'contact'
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