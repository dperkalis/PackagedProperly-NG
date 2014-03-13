'use strict';


// Declare app level module which depends on filters, and services
var ppApp = angular.module('ppApp', [
        'ngRoute',
        'ppApp.filters',
        'ppApp.services',
        'ppApp.directives',
        'ppApp.controllers'
    ]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/summary', {templateUrl: 'partials/summary.html', controller: 'SummaryCtrl'});
        $routeProvider.when('/journal', {templateUrl: 'partials/journal.html', controller: 'JournalCtrl'});
        $routeProvider.when('/add', {templateUrl: 'partials/add.html', controller: 'AddItemCtrl'});
        $routeProvider.when('/search', {templateUrl: 'partials/search.html', controller: 'SearchItemCtrl'});
        $routeProvider.otherwise({redirectTo: '/summary'});
    }]);
