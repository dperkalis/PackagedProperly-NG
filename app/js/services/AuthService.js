angular.module('ppApp.services')
    .factory('AuthService', ['$q', function ($q) {
        "use strict";
        var
            login = function (username, password) {
                var deferred = $q.defer();
                Parse.User.logIn(username, password, {
                    success: function (user) {
                        deferred.resolve(user);
                    },
                    error: function (user, error) {
                        deferred.reject(error);
                    }});

                return deferred.promise;
            },
            logout = function () {
                Parse.User.logOut();
            },
            createAccount = function (username, password, email) {
                var deferred = $q.defer();
                var user = new Parse.User();
                user.set('username', username);
                user.set('password', password);
                user.set('email', email);

                user.signUp(null, {
                    success: function (user) {
                        deferred.resolve(user);
                    },
                    error: function (user, error) {
                        deferred.reject(error);
                    }
                });

                return deferred.promise;
            };
        return {
            login: login,
            logout: logout,
            createAccount: createAccount
        };
    }
    ]);
