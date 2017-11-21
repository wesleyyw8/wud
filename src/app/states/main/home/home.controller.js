/** @ngInject */

import { getUsers } from 'data/users/index.js';

const homeController = ($scope) => {
  
  getUsers().then((resp) => {
    $scope.users = resp;
  })
}
homeController.$inject = ['$scope'];

module.exports = homeController;
