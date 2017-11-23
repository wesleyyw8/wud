/** @ngInject */

import { createUser } from 'data/users/index.js';

const homeController = ($scope, $timeout) => {
  $scope.form = {};
  $scope.submitForm = () => {
    createUser({
      firstname: $scope.form.firstName,
      lastname: $scope.form.lastName,
      email: $scope.form.email
    }).then(() => {
      alert('user created successfully');
      $timeout(() => {
        $scope.form = {};
        $scope.apply();
      }, 0);
    });
  };
}
homeController.$inject = ['$scope', '$timeout'];

module.exports = homeController;
