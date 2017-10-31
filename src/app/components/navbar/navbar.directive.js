/** @ngInject */
function wudNavbar() {
  return {
    restrict: 'E',
    template: require('./navbar.html')
  };
}

module.exports = wudNavbar;
