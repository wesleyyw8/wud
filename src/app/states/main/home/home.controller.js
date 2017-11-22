/** @ngInject */

import { createUser } from 'data/users/index.js';

const homeController = ($scope) => {
  $scope.form = {};
  $scope.form.firstName = 'wes';
  $scope.form.lastName = 'rebelo';
  $scope.form.email = 'wes@awd.com';
  $scope.submitForm = () => {
    createUser({
      firstname: $scope.form.firstName,
      lastname: $scope.form.lastName,
      email: $scope.form.email
    }).then((resp) => {
      console.log(resp);
    });
  };
}
homeController.$inject = ['$scope'];

module.exports = homeController;
