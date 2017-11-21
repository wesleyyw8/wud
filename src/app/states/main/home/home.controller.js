/** @ngInject */

import { getUsers } from 'data/users/index.js';

const homeController = () => {
  getUsers().then((data) => {
    console.log(data.json())
  })
  
}
module.exports = homeController;
