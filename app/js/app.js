'use strict';


// Declare app level module which depends on filters, and services
var ppApp = angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/list', {templateUrl: 'partials/list.html', controller: 'ListCtrl'});
  $routeProvider.when('/add', {templateUrl: 'partials/add.html', controller: 'AddItemCtrl'});
  $routeProvider.when('/search', {templateUrl: 'partials/search.html', controller: 'SearchItemCtrl'});
  $routeProvider.otherwise({redirectTo: '/list'});
}]);
