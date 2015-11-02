angular.module('ExperienceCtrl', []).controller('ExperienceController', function($http, Page) {
  var vm = this;
  
  vm.title = 'Experience';
  Page.setTitle('Experience');

  $http.get('/api/experience')
    .success(function (res) {
      vm.experience = res;
    });

});