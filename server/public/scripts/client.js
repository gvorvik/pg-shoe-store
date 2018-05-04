console.log('ClientJS Sourced');

var app = angular.module('ShoeApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html'
    })
    .when('/shoes', {
        templateUrl: 'views/shoes.html',
        controller:  'ShoeController as vm'
    })
    .when('/socks', {
        templateUrl: 'views/blue.html',
        controller:  'BlueController as vm'
    })
    .otherwise({
        template: '<h2>404</h2>'
    });
});
