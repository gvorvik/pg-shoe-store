console.log('ClientJS Sourced');

var app = angular.module('ShoeApp', []);

app.controller('ShoeController', ['$http', function($http) {
    console.log('Shoe Controller Loaded');
    
}]);
