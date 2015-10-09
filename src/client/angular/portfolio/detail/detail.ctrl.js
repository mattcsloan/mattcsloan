angular.module('PortfolioDetailCtrl', []).controller('PortfolioDetailController', function($scope, $http, $routeParams) {

  $scope.title = 'Item';

  $http.get('/api/portfolio/' + $routeParams.id)
    .success(function (res) {
      $scope.portfolioDetail = res;
    });
});
