"use strict";

var cryptaApp = angular.module('cryptaApp');

// Clear browser cache (in development mode)
//
// http://stackoverflow.com/questions/14718826/angularjs-disable-partial-caching-on-dev-machine
cryptaApp.run(function ($rootScope, $templateCache) {
  $rootScope.$on('$viewContentLoaded', function () {
    $templateCache.removeAll();
  });
});

//
// Constants definition
//
cryptaApp.constant('appConfig', {
  name: 'Crypta House',
  version: '0.0.0',
  baseUrl: 'http://localhost:3000'
});

//
// Routes definition
//
cryptaApp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/main'});
}]);

cryptaApp.config(['$resourceProvider', function($resourceProvider) {
  // Don't strip trailing slashes from calculated URLs
  $resourceProvider.defaults.stripTrailingSlashes = false;
}]);
