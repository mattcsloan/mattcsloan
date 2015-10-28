angular.module('MainCtrl', []).controller('MainController', function($state, $http, Page) {
  var vm = this;

  vm.Page = Page;

  $http.get('/api/navigation')
    .success(function (res) {
      vm.navigation = res;
    });

  vm.view = 'thumb';
  vm.toggleView = function(item) {
    if(item !== vm.view) {
      vm.view = vm.view === 'thumb' ? 'list': 'thumb';
    }
  };

  vm.date = new Date();

});