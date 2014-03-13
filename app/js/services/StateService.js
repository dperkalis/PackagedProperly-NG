angular.module('ppApp.services').factory('StateService', ['$window', function () {
    "use strict";
    var get = function (key) {
            return localStorage.getItem(key);
        },
        save = function (key, data) {
            localStorage.setItem(key, JSON.stringify(data));
        },
        remove = function (key) {
            localStorage.removeItem(key);
        },
        clearAll = function () {
            localStorage.clear();
        };

    return {
        get: get,
        save: save,
        remove: remove,
        clearAll: clearAll
    }
}]);
