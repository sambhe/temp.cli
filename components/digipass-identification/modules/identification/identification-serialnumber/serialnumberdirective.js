import angular from 'angular/index.js';
import serialnumberTemplate from './serialnumber.html';

let module = angular.module('crelan.serialnumberDirective', [])
  .directive('serialnumber', serialnumberDirective);
export default module.name;

function serialnumberDirective(){
  return {
    restrict: 'EA',
    template: serialnumberTemplate
  }
}