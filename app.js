var app = angular.module('app', [
    'services.dataSrv',

    'directives.searchBarDirective',
    'directives.results',
    'directives.thumbnail',

    'controllers.mainCtrl'
]);

app.constant('config', {
    baseUrl: 'https://www.omdbapi.com/'
});
