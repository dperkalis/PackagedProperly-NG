'use strict';
angular.module('ppApp')
    .controller('MainCtrl', ['$scope', 'AuthService', function ($scope, AuthService) {
        $scope.isLoggedin = false;
        $scope.errorMsg = "";
        $scope.currentUser = Parse.User.current();
        $scope.login = function () {
            AuthService.login().then(function (response) {
                $scope.currentUser = Parse.User.current();
                $scope.isLoggedin = true;
            }, function (errorResponse) {
                $scope.currentUser = Parse.User.current();
                $scope.isLoggedin = false;
            });
        };

        $scope.logout = function () {
            AuthService.logout();
            $scope.isLoggedin = false;
            $scope.currentUser = null;
        };
    }]);
