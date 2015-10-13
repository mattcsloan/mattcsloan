angular.module('PortfolioCtrl', []).controller('PortfolioController', function($scope, $http) {

  $scope.title = 'Portfolio';

  // $scope.view = 'thumb';
  // $scope.toggleView = function(item) {
  //   if(item !== $scope.view) {
  //     $scope.view = $scope.view === 'thumb' ? 'list': 'thumb';
  //   }
  // };

  $http.get('api/portfolio')
    .success(function (res) {
      $scope.portfolioList = res;
    });
});
