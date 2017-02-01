"use strict";

var categoryModule = angular.module('cryptaApp.core.category');

categoryModule.factory('Category', ['$resource', 'appConfig', function ($resource, appConfig) {
  return $resource(appConfig.baseUrl + '/categories/:id', {id: '@_id'}, {
    query: {
      method: 'GET',
      //params: {phoneId: 'phones'},
      isArray: true
    },
    update: { method: 'PUT' }
  });
}]);

categoryModule.factory('CategorySecrets', ['$resource', 'appConfig', function ($resource, appConfig) {
  return $resource(appConfig.baseUrl + '/categories/:catId/secrets', {catId: '@id'}, {});
}]);

// CategoryService
categoryModule.service('CategoryService', [function () {

}]);
