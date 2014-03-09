'use strict';

/* Controllers */

angular.module('ppApp.controllers', [])
    .controller('AddItemCtrl', ['$scope', function ($scope) {
        $scope.hello = function () {
            alert('hi');
        };

        $scope.submitForm = function (isValid) {
            alert('submitting form' + isValid);
        };
    }])
    .controller('SearchItemCtrl', [function () {

    }])
    .controller('SummaryCtrl', ['$scope', 'EntryService',
        function ($scope, EntryService) {
            $scope.entries = [];

            EntryService.getSummary().then(function (response) {
                    $scope.entries = response;
                },
                function (errorResponse) {
                    alert(errorResponse);
                });
        }])
    .controller('JournalCtrl', ['$scope', 'EntryService',
        function ($scope, EntryService) {
            $scope.journal = {};

            EntryService.getJournalDetail().then(function (response) {
                    $scope.journal = response.data;
                },
                function (errorResponse) {
                    alert(errorResponse);
                });
        }]);