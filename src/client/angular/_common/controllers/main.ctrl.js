angular.module('MainCtrl', []).controller('MainController', function($scope, $http) {

   $scope.tagline = 'main';  

   $http.get('api/navigation')
    .success(function (res) {
      $scope.navigation = res
    });

});