angular.module('services.dataSrv', [])
    .service('dataSrv', ['$http', 'config', function ($http, config) {

        var baseUrl = config.baseUrl;

        function getMovies(query, page) {
            return $http.get(baseUrl, {params: {s: "*" + query + "*", r: 'json', page: page}})
                .then(function (data) {
                    return data.data.Search;
                }, function (err) {
                    console.log('an error occurred', err);
                });

        }

        function getThumbnail(value) {
            return $http.get(baseUrl, {params: {i: value, plot: 'full', r: 'json', page: 1}})
                .then(function (data) {
                    return data.data
                }, function (err) {
                    console.log('an error occurred', err);
                });
        }

        return {
            getMovies: getMovies,
            getThumbnail: getThumbnail
        }
    }]);