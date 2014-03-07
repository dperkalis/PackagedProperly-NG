'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AddItemCtrl', ['$scope', function($scope) {
        $scope.hello = function() {
            alert('hi');
        };

        $scope.submitForm = function(isValid) {
            alert('submitting form' + isValid);
        };
  }])
  .controller('SearchItemCtrl', [function() {

  }])
    .controller('ListCtrl', [function() {

    }]);