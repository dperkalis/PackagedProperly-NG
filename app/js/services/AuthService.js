angular.module('ppApp.services')
    .factory('AuthService', ['$q', function ($q) {
        "use strict";
        var
            login = function () {
                var deferred = $q.defer();
                Parse.FacebookUtils.logIn(null, {
                    success: function (user) {
                        deferred.resolve(user);
                    },
                    error: function (user, error) {
                        deferred.resolve(error);
                    }
                });

                return deferred.promise;

            },
            logout = function () {
                Parse.User.logOut();
            };
        return {
            login: login,
            logout: logout
        };
    }
    ]);
