/** @ngInject */
function routerConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('main', {
      abstract: true,
      template: require('./main/main.html')
    })
    .state('main.home', {
      url: '/',
      template: require('./main/home/home.html'),
      controller: 'HomeController',
      controllerAs: 'home',
      customName: 'Home' 
    })
    .state('main.users', {
      url: '/users',
      template: require('./main/users/users.html'),
      controller: 'UsersController',
      controllerAs: 'users',
      customName: 'Users' 
    });

  $urlRouterProvider.otherwise('/');
}

module.exports = routerConfig;
