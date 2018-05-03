console.log('ClientJS Sourced');

var app = angular.module('ShoeApp', []);

app.controller('ShoeController', ['$http', function($http) {
    console.log('Shoe Controller Loaded');
    
    var self = this;

    self.newShoes = {
        type: '',
        cost: ''
    };

    self.shoeList = [];

    self.getShoes = function() {
        $http({
            method: 'GET',
            url: '/shoes'
        })
        .then(function(response) {
            console.log(response);
            self.shoeList = response.data;
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    self.postShoes = function() {
        console.log(self.newShoes);
        $http({
            method: 'POST',
            url: '/shoes',
            data: self.newShoes
        })
        .then(function(response) {
            console.log(response);
            self.getShoes();
        })
        .catch(function(error) {
            console.log(error);
            
        })
    }

    self.getShoes();

}]);
