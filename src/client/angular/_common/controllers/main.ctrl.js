angular.module('MainCtrl', []).controller('MainController', function($scope, $http) {

  $scope.tagline = 'main';  

  $http.get('api/navigation')
    .success(function (res) {
      $scope.navigation = res
    });

  $scope.$on('$routeChangeSuccess', function (event, data) {
    $scope.errormessage = '';
    $scope.pageTitle = data.title + ' | Matt Sloan | UI Designer &amp; Full-Stack Developer';
  });

});