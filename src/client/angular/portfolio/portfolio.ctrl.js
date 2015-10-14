angular.module('PortfolioCtrl', []).controller('PortfolioController', function($scope, $http, Page, $location) {

  Page.setTitle('Portfolio');
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

  $scope.openItem = function(item) {
    $location.path('portfolio/' + item.id);
  };
});
