angular.module('directives.searchBarDirective', [])
    .directive('searchBar', [function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                query: '='
            },
            templateUrl: 'directives/search-bar/search-bar.tpl.html'
        }
    }]);

