"use strict";

var secretsModule = angular.module('cryptaApp.secrets');

secretsModule.component('secretsList', {
  templateUrl: 'secrets/secrets-list.html',
  controller: 'SecretsListCtrl'
});

secretsModule.component('secretForm', {
  templateUrl: 'secrets/secret-form.html',
  controller: 'SecretFormCtrl'
});
