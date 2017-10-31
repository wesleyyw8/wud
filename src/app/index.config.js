/*@ngInject*/
function config($locationProvider) {
  $locationProvider.html5Mode(false);
}
module.exports = config;
