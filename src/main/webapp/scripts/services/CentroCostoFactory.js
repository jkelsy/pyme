angular.module('pyme').factory('CentroCostoResource', function($resource){
    var resource = $resource('rest/centrocostos/:CentroCostoId',{CentroCostoId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});