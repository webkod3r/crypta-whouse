"use strict";

var secretsModule = angular.module('cryptaApp.secrets');

secretsModule.component('secretsList', {
  templateUrl: 'secrets/secrets-list.html',
  controller: 'SecretsListCtrl'
});
