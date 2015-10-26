angular.module('MainCtrl', []).controller('MainController', function($scope, $state, $http, Page) {
  var vm = this;

  $scope.Page = Page;

  $http.get('/api/navigation')
    .success(function (res) {
      vm.navigation = res;
    });

  vm.view = 'thumb';
  vm.toggleView = function(item) {
    if(item !== $scope.view) {
      vm.view = vm.view === 'thumb' ? 'list': 'thumb';
    }
  };

});