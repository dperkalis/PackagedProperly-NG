'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AddItemCtrl', ['$scope', function($scope) {
        $scope.hello = function() {
            alert('hi');
        };
        $scope.description = "";
        $scope.itemDate = new Date();
        $scope.amount = 0;
        $scope.submitForm = function(isValid) {
            alert('submitting form' + isValid);
        };
  }])
  .controller('SearchItemCtrl', [function() {

  }])
    .controller('ListCtrl', [function() {

    }]);