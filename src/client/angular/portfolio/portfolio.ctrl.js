angular.module('PortfolioCtrl', []).controller('PortfolioController', function($scope, $http, Page, $location) {

  Page.setTitle('Portfolio');
  $scope.title = 'Portfolio';

  $http.get('api/portfolio')
    .success(function (res) {
      $scope.portfolioList = res;
    });

  $scope.openItem = function(item) {
    $location.path('portfolio/' + item.id);
  };
});
