
angular.module('pyme').controller('NewArticuloController', function ($scope, $location, locationParser, flash, ArticuloResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.articulo = $scope.articulo || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            flash.setMessage({'type':'success','text':'The articulo was created successfully.'});
            $location.path('/Articulos');
        };
        var errorCallback = function(response) {
            if(response && response.data && response.data.message) {
                flash.setMessage({'type': 'error', 'text': response.data.message}, true);
            } else {
                flash.setMessage({'type': 'error', 'text': 'Something broke. Retry, or cancel and start afresh.'}, true);
            }
        };
        ArticuloResource.save($scope.articulo, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Articulos");
    };
});