angular.module('pyme').factory('ArticuloResource', function($resource){
    var resource = $resource('rest/articulos/:ArticuloId',{ArticuloId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});