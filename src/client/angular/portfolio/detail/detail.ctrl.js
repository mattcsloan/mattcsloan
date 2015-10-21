angular.module('PortfolioDetailCtrl', []).controller('PortfolioDetailController', function($scope, $http, $routeParams, Page) {

  $scope.title = 'Item';
  $http.get('/api/portfolio/' + $routeParams.id)
    .success(function (res) {
      $scope.portfolioDetail = res;
    });
  $http.get('/api/portfolio/preview/' + $routeParams.id)
    .success(function (res) {
      $scope.portfolioPreview = res;
      $scope.portfolioTools = res.tools;
      Page.setTitle(res.project);
    });
});
