

angular.module('pyme').controller('EditCentroCostoController', function($scope, $routeParams, $location, flash, CentroCostoResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.centroCosto = new CentroCostoResource(self.original);
        };
        var errorCallback = function() {
            flash.setMessage({'type': 'error', 'text': 'The centroCosto could not be found.'});
            $location.path("/CentroCostos");
        };
        CentroCostoResource.get({CentroCostoId:$routeParams.CentroCostoId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.centroCosto);
    };

    $scope.save = function() {
        var successCallback = function(){
            flash.setMessage({'type':'success','text':'The centroCosto was updated successfully.'}, true);
            $scope.get();
        };
        var errorCallback = function(response) {
            if(response && response.data && response.data.message) {
                flash.setMessage({'type': 'error', 'text': response.data.message}, true);
            } else {
                flash.setMessage({'type': 'error', 'text': 'Something broke. Retry, or cancel and start afresh.'}, true);
            }
        };
        $scope.centroCosto.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/CentroCostos");
    };

    $scope.remove = function() {
        var successCallback = function() {
            flash.setMessage({'type': 'error', 'text': 'The centroCosto was deleted.'});
            $location.path("/CentroCostos");
        };
        var errorCallback = function(response) {
            if(response && response.data && response.data.message) {
                flash.setMessage({'type': 'error', 'text': response.data.message}, true);
            } else {
                flash.setMessage({'type': 'error', 'text': 'Something broke. Retry, or cancel and start afresh.'}, true);
            }
        }; 
        $scope.centroCosto.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});