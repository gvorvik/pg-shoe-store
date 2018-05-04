app.controller('SockController', ['SockService', '$http', function(SockService, $http) {
    console.log('Sock Controller Loaded');
    
    var self = this;

    self.sockList = SockService.sockList;
    self.newSocks = SockService.newSocks;
    self.getSocks = SockService.getSocks;
    self.postSocks = SockService.postSocks;
    self.deleteSocks = SockService.deleteSocks;
    self.editSocks = SockService.editSocks;

    self.getSocks();

}]);