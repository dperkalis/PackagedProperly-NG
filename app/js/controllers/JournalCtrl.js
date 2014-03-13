'use strict';
angular.module('ppApp.controllers')
    .controller('JournalCtrl', ['$scope', 'EntryService',
        function ($scope, EntryService) {
            $scope.journal = {};

            EntryService.getJournalDetail().then(function (response) {
                    $scope.journal = response.results;
                },
                function (errorResponse) {
                    alert(errorResponse);
                });
        }]);
