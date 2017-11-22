import { getUsers } from 'data/users/index.js';

const usersController = ($scope) => {
  getUsers().then((resp) => {
    $scope.users = resp;
  });
}
usersController.$inject = ['$scope'];

module.exports = usersController;
