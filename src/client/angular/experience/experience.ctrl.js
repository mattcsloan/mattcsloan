angular.module('ExperienceCtrl', []).controller('ExperienceController', function($scope, $http, Page) {

  $scope.title = 'Experience';
  Page.setTitle('Experience');

  $http.get('api/experience')
    .success(function (res) {
      $scope.experience = res;
    });
});