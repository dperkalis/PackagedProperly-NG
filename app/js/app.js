'use strict';


// Declare app level module which depends on filters, and services
var ppApp = angular.module('ppApp', [
        'ngRoute',
        'ppApp.services',
        'ppApp.controllers'
    ]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/summary', {templateUrl: 'partials/summary.html', controller: 'SummaryCtrl'});
        $routeProvider.when('/journal', {templateUrl: 'partials/journal.html', controller: 'JournalCtrl'});
        $routeProvider.when('/add', {templateUrl: 'partials/add.html', controller: 'AddItemCtrl'});
        $routeProvider.otherwise({redirectTo: '/summary'});
    }]);
