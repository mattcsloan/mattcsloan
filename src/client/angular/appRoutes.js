angular.module('appRoutes', []).config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider

        .state('home', {
            url: '/',
            views: {
                header: {
                    templateUrl: '/templates/_common/templates/header.tmpl.html',
                },
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
                header: {
                    templateUrl: '/templates/_common/templates/header.tmpl.html',
                },
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
                url: '/:portfolioKey',
                views: {
                    portfolio: {
                        templateUrl: '/templates/portfolio/detail/detail.view.html',
                        controller: 'PortfolioDetailController',
                        controllerAs: 'detail',
                        resolve: {
                            portfolioKey: ['$stateParams', '$state', function($stateParams, $state){
                                if(!$stateParams.portfolioKey) {
                                    $state.go('portfolio');
                                }  else {
                                    return $stateParams.portfolioKey;
                                }                               
                            }]
                        }
                    }
                }
            })


        .state('experience', {
            url: '/experience',
            views: {
                header: {
                    templateUrl: '/templates/_common/templates/header.tmpl.html',
                },
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
                header: {
                    templateUrl: '/templates/_common/templates/header.tmpl.html',
                },
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