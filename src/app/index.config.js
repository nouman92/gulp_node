(function() {
  'use strict';

  angular
    .module('nagiosapp')
    .config(config);

  /** @ngInject */
  function config($logProvider,$locationProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('!');
  }

})();
