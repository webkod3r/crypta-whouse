"use strict";

var secretsModule = angular.module('cryptaApp.secrets');

secretsModule.factory('Secrets', ['$resource', 'appConfig', function ($resource, appConfig) {
  return $resource(appConfig.baseUrl + '/secrets/:id', {id: '@_id'}, {
    query: {method: "GET", isArray: true}
  });
}]);

secretsModule.factory('SecretsCategory', ['$resource', 'appConfig', function ($resource, appConfig) {
  return $resource(appConfig.baseUrl + '/categories/:catId/secrets', {id: '@_id'}, {
    query: {method: "GET", isArray: true}
  });
}]);

// SecretService to share information among controlles
secretsModule.service('SecretService', ['Secrets', 'SecretsCategory', function (Secrets, SecretsCategory) {
  var self = this;
  var currentSecret = null;
  var currentCategory = null;
  var secrets = [];

  this.secrets = function () {
    return secrets;
  };

  /**
   * Load just a secret by ID
   * @param secretId
   * @returns {*}
   */
  this.loadSecret = function (secretId) {
    var s = Secrets.get({id: secretId});
    s.$promise.then(function (response) {
      currentSecret = response;
    });

    return s;
  };

  /**
   * Load all secrets or by category
   * @param category
   * @returns {*|{method, isArray}|{}}
   */
  this.loadSecrets = function (category) {
    var query = null;
    if (isNaN(category)) {
      currentCategory = -1;
      query = Secrets.query();
    } else {
      currentCategory = category;
      query = SecretsCategory.query({catId: category});
    }

    query.$promise.then(function (response) {
      secrets = response;
    });

    return query;
  };

  this.current = function (value) {
    if (value != null) {
      currentSecret = value;
    }
    return currentSecret;
  };

  /**
   * Get/Set current category
   *
   * @param {Number|null} value
   * @returns {Number|null}
   */
  this.category = function (value) {
    if (value != null) {
      currentCategory = value;
    }
    return currentCategory;
  };
}]);
