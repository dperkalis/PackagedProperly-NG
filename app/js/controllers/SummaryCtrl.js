'use strict';
angular.module('ppApp.controllers')
    .controller('SummaryCtrl', ['$scope', 'EntryService',
        function ($scope, EntryService) {
            $scope.entries = [];

            EntryService.getSummary().then(function (response) {
                    $scope.entries = response;
                },
                function (errorResponse) {
                    alert(errorResponse);
                });
        }]);