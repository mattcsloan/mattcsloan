(function() {
  'use strict';

  angular
    .module('app.factories')
    .factory('Page', page)
  ;

  /* @ngInject */
  function page() {
    var title = 'Matt Sloan | UI Designer &amp; Full-Stack Developer';
    return {
      title: function() { return title + ' | Matt Sloan | UI Designer &amp; Full-Stack Developer'; },
      setTitle: function(newTitle) { title = newTitle + ' | Matt Sloan | UI Designer &amp; Full-Stack Developer' }
    };
  }
})();