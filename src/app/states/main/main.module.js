var ngModule = angular
  .module('wud.techtest.states.main', [require('./home/home.module.js'), require('./users/users.module.js')])
  .controller('MainController', require('./main.controller.js'));
module.exports = ngModule.name;
