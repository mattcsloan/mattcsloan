angular.module('MainCtrl', []).controller('MainController', function($scope, $http, Page) {
  var vm = this;

  $scope.Page = Page;

  $http.get('/api/navigation')
    .success(function (res) {
      vm.navigation = res;
    });

  // $scope.$on('$routeChangeSuccess', function (event, data) {
  //   $scope.errormessage = '';
  //   $scope.pageTitle = data.title + ' | Matt Sloan | UI Designer &amp; Full-Stack Developer';
  // });

  vm.view = 'thumb';
  vm.toggleView = function(item) {
    if(item !== $scope.view) {
      vm.view = vm.view === 'thumb' ? 'list': 'thumb';
    }
  };

});