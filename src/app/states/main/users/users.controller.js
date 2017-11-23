import { getUsers, deleteUser } from 'data/users/index.js';

const usersController = ($scope, $timeout) => {
  const loadUsersList = (callback) => {
    getUsers().then((resp) => {
      $scope.users = resp;
      if (callback) {
        callback();
      }
    });
  };
  $scope.deleteUser = (userId) => {
    deleteUser(userId).then((resp) => {
      $timeout(() => {
        loadUsersList(() => {
          $scope.$apply();
        });    
      },0);
    });
  }
  loadUsersList();
}
usersController.$inject = ['$scope', '$timeout'];

module.exports = usersController;
