angular.module('directives.results', [])
    .directive('results', ['dataSrv', function (dataSrv) {
        return {
            restrict: 'E',
            templateUrl: 'directives/results/results.tpl.html',
            replace: true,
            scope: {
                query: '='
            },
            controller: function ($scope) {
                function init() {
                    $scope.expanded = false;
                    $scope.currentPage = 1;
                    $scope.active = false;
                }

                function loadResults() {
                    $scope.results = null;
                    $scope.loading = true;
                    $scope.noResults = false;
                    dataSrv.getMovies($scope.query, $scope.currentPage)
                        .then(function (results) {
                            $scope.loading = false;
                            if (!results || results.length === 0) {
                                $scope.noResults = true;
                            } else {
                                $scope.results = results;
                            }
                        }, function () {
                            $scope.loading = false;
                            $scope.noResults = true;
                        });
                }

                $scope.$watch('query', function (val) {
                    if (!val) {
                        $scope.results = null;
                        $scope.noResults = false;
                    } else {
                        loadResults();
                    }
                });

                $scope.next = function () {
                    $scope.currentPage += 1;
                    loadResults();
                };

                $scope.prev = function () {
                    if ($scope.currentPage > 1) {
                        $scope.currentPage -= 1;
                        loadResults();
                    }
                };

                $scope.selectMovie = function (item) {
                    if (!$scope.selected) {
                        $scope.selected = item;
                    }
                };

                $scope.closeThumb = function () {
                    $scope.selected = null;
                };

                init();
            }
        }
    }]);