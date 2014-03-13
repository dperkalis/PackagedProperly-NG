"use strict";

angular.module('ppApp.services')
    .factory('AuthService', ['', function () {

        var login = function () {
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

        return {
            login: login
        };
    }]);
