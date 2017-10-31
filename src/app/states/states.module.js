angular
  .module('wud.techtest.states', ['ui.router', 'ui.bootstrap', require('./main/main.module.js')])
  .config(require('./states.route.js'));
module.exports = 'wud.techtest.states';
