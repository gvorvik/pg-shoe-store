console.log('ClientJS Sourced');

var app = angular.module('ShoeApp', []);

app.controller('ShoeController', ['MainService', '$http', function(MainService, $http) {
    console.log('Shoe Controller Loaded');
    
    var self = this;

    self.shoeList = MainService.shoeList;
    self.newShoes = MainService.newShoes;
    self.getShoes = MainService.getShoes;
    self.postShoes = MainService.postShoes;

    self.getShoes();

}]);
