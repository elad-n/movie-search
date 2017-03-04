angular.module('directives.thumbnail', [])
    .directive('thumbnail', ['dataSrv', function (dataSrv) {
        'use strict';

        return {
            restrict: 'E',
            replace: true,
            scope: {
                movie: '=',
                selected: '=',
                openThumb: '&',
                closeThumb: '&'
            },
            templateUrl: 'directives/thumbnail/thumbnail.tpl.html',
            controller: function ($scope) {
                $scope.$watch('selected', function (val) {
                    if (val !== $scope.movie) return;

                    if (!$scope.fullItem) {
                        loadMovieInfo();
                    }
                });

                function loadMovieInfo() {
                    $scope.loading = true;
                    dataSrv.getThumbnail($scope.movie.imdbID)
                        .then(function (data) {
                            $scope.fullItem = data;
                            $scope.loading = false;
                        }, function (err) {
                            console.log(err);
                            $scope.loading = false;
                        })
                }
            }
        }
    }]);