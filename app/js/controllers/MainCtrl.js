'use strict';
angular.module('ppApp')
    .controller('MainCtrl', ['$scope', 'AuthService', function ($scope, AuthService) {
        $scope.isLoggedin = Parse.User.current();
        $scope.errorMsg = "";
        $scope.currentUser = Parse.User.current();
        $scope.logout = function () {
            AuthService.logout();
            $scope.isLoggedin = false;
            $scope.currentUser = null;
        };
        $scope.$on('loggedin', function (e) {
            $scope.currentUser = Parse.User.current();
            $scope.isLoggedin = Parse.User.current();
        });
    }]);
