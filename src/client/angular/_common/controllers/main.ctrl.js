angular.module('MainCtrl', []).controller('MainController', function($scope, $http) {
  var vm = this;

  $scope.tagline = 'main';  

  $http.get('/api/navigation')
    .success(function (res) {
      vm.navigation = res;
    });

  $scope.$on('$routeChangeSuccess', function (event, data) {
    $scope.errormessage = '';
    $scope.pageTitle = data.title + ' | Matt Sloan | UI Designer &amp; Full-Stack Developer';
  });

});