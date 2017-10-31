var ngModule = angular
  .module('wud.techtest.components.navbar', [])
  .directive('wudNavbar', require('./navbar.directive.js'));
module.exports = ngModule.name;
