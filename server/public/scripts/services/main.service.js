

app.service('MainService',['$http', function($http) {
    console.log('Main Service Loaded');
    var self = this;

    self.newShoes = {
        type: '',
        cost: ''
    };

    self.shoeList = {
        results: ''
    };

    self.getShoes = function() {
        $http({
            method: 'GET',
            url: '/shoes'
        })
        .then(function(response) {
            self.shoeList.results = response.data.rows;
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

    self.deleteShoes = function(shoe) {
        console.log(shoe);
        $http({
            method: 'DELETE',
            url: '/shoes',
            params: shoe
        })
        .then(function(response) {
            console.log(response);
            self.getShoes();
        })
        .catch(function(error) {
            console.log(error);            
        });
    }
}]);