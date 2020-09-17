import angular from 'angular';
import { angular2react } from 'angular2react';

const MyComponent = {
  bindings: {
    fooBar: '<',
    baz: '<'
  },
  template: `
    <p>FooBar: {this.$ctrl.fooBar}</p>
    <p>Baz: {this.$ctrl.baz}</p>
  `
}

let $injector
angular
  .module('Demo', [])
  .component('myComponent', MyComponent)
  .run(['$injector', function(_$injector) { $injector = _$injector }])

angular.bootstrap(document.createElement('div'), ['Demo'])
 
const AngularComponent = angular2react('myComponent', MyComponent, $injector);

export default AngularComponent;