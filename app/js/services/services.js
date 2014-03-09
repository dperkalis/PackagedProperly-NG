'use strict';

/* Services */
angular.module('ppApp.services', [])
    .factory('EntryService', ['$http', '$q', function ($http, $q) {


        var getSummary = function () {
                var deferred = $q.defer();
                $http({method: "GET", url: "data/summary.json"}).success(function (data, status, headers, config) {
                    deferred.resolve(data);
                }).error(function (data, status, headers, config) {
                        deferred.reject(status)
                    });

                return deferred.promise;
            },

            getJournalDetail = function () {
                var deferred = $q.defer();
                return $http({method: "GET", url: "data/journal.json"}).success(function (data, status, headers, config) {
                    deferred.resolve(data);
                }).error(function (data, status, headers, config) {
                        deferred.reject(status);
                    });

                return deferred.promise;
            }

        return {
            getSummary: getSummary,
            getJournalDetail: getJournalDetail
        };
    }]);
