angular.module('PortfolioDetailCtrl', []).controller('PortfolioDetailController', function($http, Page, portfolioKey) {
  var vm = this;
  
  $http.get('/api/portfolio/' + portfolioKey)
    .success(function (res) {
      vm.portfolioDetail = res;
    });
  $http.get('/api/portfolio/preview/' + portfolioKey)
    .success(function (res) {
      vm.portfolioPreview = res;
      Page.setTitle(res.project);
    });
});
