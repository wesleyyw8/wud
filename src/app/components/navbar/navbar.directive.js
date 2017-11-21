/** @ngInject */
const wudNavbar = $state => {
  return {
    restrict: 'E',
    template: require('./navbar.html'),
    link: (scope) => {
      scope.navLinks = $state.get().filter((link) => 
        link.abstract !== true
      );
    }
  };
}

module.exports = wudNavbar;
