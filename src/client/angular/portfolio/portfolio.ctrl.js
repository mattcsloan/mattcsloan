angular.module('PortfolioCtrl', []).controller('PortfolioController', function($scope, $http) {

   $scope.title = 'Portfolio';  

   $http.get('api/portfolio')
    .success(function (res) {
      $scope.portfolioList = res;
    });

});
