'use strict';

/* Controllers */

angular.module('ppApp.controllers', [])

    .controller('AddItemCtrl', ['$scope', 'EntryService', function ($scope, EntryService) {
        $scope.formData = {};

        $scope.hello = function () {
            alert('hi');
        };

        $scope.submitForm = function (isValid) {
            EntryService.addEntry($scope.formData);
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
                    $scope.journal = response.results;
                },
                function (errorResponse) {
                    alert(errorResponse);
                });
        }])
    .controller('MainCtrl', ['$scope', function ($scope) {
        $scope.user = {};
        $scope.login = function () {
            Parse.FacebookUtils.logIn(null, {
                success: function (user) {
                    $scope.user.username = user.getUsername();
                    $scope.user.authenticated = true;
                    console.log('TODO - Save Cookie');
                },
                error: function (user, error) {
                    alert("User cancelled the Facebook login or did not fully authorize.");
                }
            });
        };
    }]);