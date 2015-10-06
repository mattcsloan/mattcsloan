angular.module('ExperienceCtrl', []).controller('ExperienceController', function($scope, $http) {

  $scope.title = 'Experience';

  $http.get('api/experience')
    .success(function (res) {
      $scope.experience = res;
    });
});