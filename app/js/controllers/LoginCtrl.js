angular.module('ppApp.controllers').controller('LoginCtrl', ['$scope', 'AuthService', function ($scope, AuthService) {
    "use strict";
    $scope.user = {};
    $scope.newUser = {};
    $scope.login = function () {
        AuthService.login($scope.user.username, $scope.user.password).then(
            function (response) {
                $scope.$emit('loggedin');
            },
            function (errorResponse) {
                console.log(errorResponse)
            }
        );
    }
    $scope.createAccount = function () {
        AuthService.createAccount($scope.newUser.username, $scope.newUser.password, $scope.newUser.email).then(
            function (response) {
                alert('created')
            },
            function (errorResponse) {
                console.log(errorResponse)
            }
        )
    }
}])