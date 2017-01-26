(function() {
  'use strict';

  angular
    .module('nagiosapp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout,$log) {
    var vm = this;

    // declare your variables in here
    this.appname = "Angular Gulp Build App"

    //declare your functions in here
    function getData() {
      //get your data in here
      $log.info("fetching data");
    }
    getData();

  }
})();
