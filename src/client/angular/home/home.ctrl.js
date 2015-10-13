angular.module('HomeCtrl', []).controller('HomeController', function($scope, Page) {

  $scope.title = 'Home';
  Page.setTitle('Home');
});