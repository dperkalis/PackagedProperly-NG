'use strict';
angular.module('ppApp.controllers')
    .controller('AddItemCtrl', ['$scope', 'EntryService', function ($scope, EntryService) {
        $scope.formData = {};

        $scope.hello = function () {
            alert('hi');
        };

        $scope.submitForm = function (isValid) {
            EntryService.addEntry($scope.formData);
        };
    }]);
