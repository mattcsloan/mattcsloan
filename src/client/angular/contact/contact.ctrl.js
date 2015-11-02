angular.module('ContactCtrl', []).controller('ContactController', function(Page) {
  var vm = this;

  vm.title = 'Contact Me';
  Page.setTitle('Contact Me');

});