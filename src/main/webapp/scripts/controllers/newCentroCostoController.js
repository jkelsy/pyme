
angular.module('pyme').controller('NewCentroCostoController', function ($scope, $location, locationParser, flash, CentroCostoResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.centroCosto = $scope.centroCosto || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            flash.setMessage({'type':'success','text':'The centroCosto was created successfully.'});
            $location.path('/CentroCostos');
        };
        var errorCallback = function(response) {
            if(response && response.data && response.data.message) {
                flash.setMessage({'type': 'error', 'text': response.data.message}, true);
            } else {
                flash.setMessage({'type': 'error', 'text': 'Something broke. Retry, or cancel and start afresh.'}, true);
            }
        };
        CentroCostoResource.save($scope.centroCosto, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/CentroCostos");
    };
});