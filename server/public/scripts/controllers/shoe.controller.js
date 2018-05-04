app.controller('ShoeController', ['ShoeService', '$http', function(ShoeService, $http) {
    console.log('Shoe Controller Loaded');
    
    var self = this;

    self.shoeList = ShoeService.shoeList;
    self.newShoes = ShoeService.newShoes;
    self.getShoes = ShoeService.getShoes;
    self.postShoes = ShoeService.postShoes;
    self.deleteShoes = ShoeService.deleteShoes;
    self.editShoes = ShoeService.editShoes;

    self.getShoes();

}]);