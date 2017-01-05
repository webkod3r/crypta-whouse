'use strict';

var mainModule = angular.module('cryptaApp.main', ['ngRoute']);

mainModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {
    templateUrl: 'main/main.html',
    controller: 'MainCtrl'
  });
}]);

mainModule.controller('MainCtrl', [function() {

}]);
