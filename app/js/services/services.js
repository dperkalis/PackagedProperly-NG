'use strict';

/* Services */
angular.module('ppApp.services', [])
    .factory('EntryService', ['$http', '$q', function ($http, $q) {
        var appId = "OxXlG88dNvP7nr2RIBvHthzyMPIywbNI364wrfk4", apiKey = "9UsXZ8BZuIMSfzCAxWLBryxnmdbACeBdslCUiKzW",
            baseUrl = "https://api.parse.com/1/classes/journalentries",
            headers = {
                "Content-Type": "application/json",
                "X-Parse-Application-Id": appId,
                "X-Parse-REST-API-Key": apiKey
            },

            getSummary = function () {
                var deferred = $q.defer();
                $http({method: "GET", url: "data/summary.json"}).success(function (data, status, headers, config) {
                    deferred.resolve(data);
                }).error(function (data, status, headers, config) {
                        deferred.reject(status)
                    });

                return deferred.promise;
            },

            getJournalDetail = function (entryDate) {
                var deferred = $q.defer();
                $http({method: "GET", url: baseUrl, headers: headers}).success(function (data, status, headers, config) {
                    deferred.resolve(data);
                }).error(function (data, status, headers, config) {
                        deferred.reject(status);
                    });

                return deferred.promise;
            },

            addEntry = function (newEntry) {
                var deferred = $q.defer();
                $http({
                        method: "POST",
                        url: baseUrl,
                        data: newEntry,
                        headers: headers
                    }
                ).success(function (data, status, headers, config) {
                        deferred.resolve(data);
                    }).error(function (data, status, headers, config) {
                        deferred.reject(status);
                    });
                return deferred.promise;
            }

        return {
            getSummary: getSummary,
            getJournalDetail: getJournalDetail,
            addEntry: addEntry
        };
    }])
    .factory('AuthService', ['$http', '$q', function ($http, $q) {


    }]);
