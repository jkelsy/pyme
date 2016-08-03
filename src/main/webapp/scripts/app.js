'use strict';

angular.module('pyme',['ngRoute','ngResource'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',{templateUrl:'views/landing.html',controller:'LandingPageController'})
      .when('/Articulos',{templateUrl:'views/Articulo/search.html',controller:'SearchArticuloController'})
      .when('/Articulos/new',{templateUrl:'views/Articulo/detail.html',controller:'NewArticuloController'})
      .when('/Articulos/edit/:ArticuloId',{templateUrl:'views/Articulo/detail.html',controller:'EditArticuloController'})
      .when('/CentroCostos',{templateUrl:'views/CentroCosto/search.html',controller:'SearchCentroCostoController'})
      .when('/CentroCostos/new',{templateUrl:'views/CentroCosto/detail.html',controller:'NewCentroCostoController'})
      .when('/CentroCostos/edit/:CentroCostoId',{templateUrl:'views/CentroCosto/detail.html',controller:'EditCentroCostoController'})
      .otherwise({
        redirectTo: '/'
      });
  }])
  .controller('LandingPageController', function LandingPageController() {
  })
  .controller('NavController', function NavController($scope, $location) {
    $scope.matchesRoute = function(route) {
        var path = $location.path();
        return (path === ("/" + route) || path.indexOf("/" + route + "/") == 0);
    };
  });
