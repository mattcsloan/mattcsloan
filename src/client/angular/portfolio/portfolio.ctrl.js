angular.module('PortfolioCtrl', []).controller('PortfolioController', function($scope, $http) {

  $scope.title = 'Portfolio';  

  $http.get('api/portfolio')
    .success(function (res) {
      $scope.portfolioList = res;
    });

  $scope.$on('$routeChangeSuccess', function (event, data) {
    $scope.errormessage = '';
    $scope.pageTitle = data.title + ' | Matt Sloan | UI Designer &amp; Full-Stack Developer';
  });
});
