angular.module('PortfolioDetailCtrl', []).controller('PortfolioDetailController', function($scope, $http, Page, portfolioId) {

  console.log('parameter: ' + portfolioId);
  
  $scope.title = 'Item';
  $http.get('/api/portfolio/' + portfolioId)
    .success(function (res) {
      $scope.portfolioDetail = res;
    });
  $http.get('/api/portfolio/preview/' + portfolioId)
    .success(function (res) {
      $scope.portfolioPreview = res;
      $scope.portfolioTools = res.tools;
      Page.setTitle(res.project);
    });
});
