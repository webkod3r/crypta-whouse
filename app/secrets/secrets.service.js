"use strict";

var secretsModule = angular.module('cryptaApp.secrets');

secretsModule.factory('Secrets', ['$resource', 'appConfig', function($resource, appConfig){
  return $resource(appConfig.baseUrl + '/secrets/:id', {}, {});
}]);

secretsModule.service('SecretService', function () {
  return {};
});
