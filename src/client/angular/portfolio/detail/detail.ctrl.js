angular.module('PortfolioDetailCtrl', []).controller('PortfolioDetailController', function($http, Page, portfolioId) {
  var vm = this;
  console.log('parameter: ' + portfolioId);
  
  $http.get('/api/portfolio/' + portfolioId)
    .success(function (res) {
      vm.portfolioDetail = res;
    });
  $http.get('/api/portfolio/preview/' + portfolioId)
    .success(function (res) {
      vm.portfolioPreview = res;
      // vm.portfolioTools = res.tools;
      Page.setTitle(res.project);
    });
});
