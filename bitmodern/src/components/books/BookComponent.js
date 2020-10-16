import angular from 'angular';
import { angular2react } from 'angular2react';
import { createBook } from '../../actions/index';
import { connect } from 'react-redux';
import {store} from "../../index";

const MyComponent = {
  controller: ($scope, $timeout) => {
    $scope.updateBook = book => {
      // $timeout(function(){
      //   $scope.$apply(`${createBook(book)};`);
      // });
      store.dispatch(createBook(book));
    }
  },
  template: `
    <form class="ui form">
      <div class="field">
      <label>Enter Title <input type="text" ng-model="book.title" /></label>
      </div>
      <div class="field">
      <label>Enter Description <input type="text" ng-model="book.description" /></label>
      </div>
      <input class="ui button primary" type="submit" ng-click="updateBook(book)" value="Submit" />
    </form>
  `
}

let $injector
angular
  .module('Demo', [])
  .component('myComponent', MyComponent)
  .run(['$injector', function(_$injector) { $injector = _$injector }])

angular.bootstrap(document.createElement('div'), ['Demo'])
 
const AngularComponent = angular2react('myComponent', MyComponent, $injector);
export default connect()(AngularComponent);