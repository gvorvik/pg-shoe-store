app.service('SockService',['$http', function($http) {
    console.log('Sock Service Loaded');
    var self = this;

    self.newSocks = {
        type: '',
        cost: ''
    };

    self.sockList = {
        results: ''
    };

    self.getSocks = function() {
        $http({
            method: 'GET',
            url: '/socks'
        })
        .then(function(response) {
            self.sockList.results = response.data.rows;
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    self.postSocks = function() {
        console.log(self.newSocks);
        $http({
            method: 'POST',
            url: '/socks',
            data: self.newSocks
        })
        .then(function(response) {
            console.log(response);
            self.getSocks();
        })
        .catch(function(error) {
            console.log(error);
            
        })
    }

    self.editSocks = function(socks) {
        console.log(socks);
        $http({
                method: 'PUT',
                url: '/socks',
                data: socks
            })
            .then(function(response) {
                console.log(response);
                self.getSocks();
            })
            .catch(function(error) {
                console.log(error);            
            })  
    }

    self.deleteSocks = function(socks) {
        console.log(socks);
        $http({
            method: 'DELETE',
            url: '/socks',
            params: socks
        })
        .then(function(response) {
            console.log(response);
            self.getSocks();
        })
        .catch(function(error) {
            console.log(error);            
        });
    }
}]);