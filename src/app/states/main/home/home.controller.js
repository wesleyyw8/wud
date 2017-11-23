/** @ngInject */

import { createUser } from 'data/users/index.js';

const homeController = ($scope) => {
  //$scope.form = {};
  $scope.submitForm = () => {
    createUser({
      firstname: $scope.form.firstName,
      lastname: $scope.form.lastName,
      email: $scope.form.email
    }).then((resp) => {
      alert('user created successfully');
    });
  };
}
homeController.$inject = ['$scope'];

module.exports = homeController;
