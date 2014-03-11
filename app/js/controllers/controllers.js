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
    .controller('LoginCtrl', ['$scope', 'EntryService',
        function ($scope, EntryService) {

            $scope.login = function () {
                Parse.FacebookUtils.logIn(null, {
                    success: function (user) {
                        if (!user.existed()) {
                            alert("User signed up and logged in through Facebook!");
                        } else {
                            alert("User logged in through Facebook!");
                        }
                    },
                    error: function (user, error) {
                        alert("User cancelled the Facebook login or did not fully authorize.");
                    }
                });
            };


            $scope.loggedIn = FB.getLoginStatus();

            $scope.journal = {};

            EntryService.getJournalDetail().then(function (response) {
                    $scope.journal = response.results;
                },
                function (errorResponse) {
                    alert(errorResponse);
                });
        }]);