(function() {
  'use strict';

  angular
    .module('nagiosapp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.debug('inseide run block');
  }

})();
