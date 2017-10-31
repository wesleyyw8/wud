import angular from 'angular';
import 'babel-polyfill';
import 'angular-ui-bootstrap';
import 'angular-ui-router';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

angular
  .module('wud.techtest', [require('./components/components.module.js'), require('./states/states.module.js')])
  .config(require('./index.config.js'));
module.exports = 'wud.techtest';
