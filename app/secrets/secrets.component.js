"use strict";

var secretsModule = angular.module('cryptaApp.secrets');

secretsModule.component('secretsList', {
  templateUrl: 'secrets/secrets.html',
  controller: ['$scope', 'Secrets', function($scope, Secrets){
    var self = this;
    var secrets = Secrets.query();
    secrets.$promise.then(function (response) {
      self.secrets = response;
    });
    this.order = 'created';

    this.loadSecret = function (secretID) {
      self.selected = secretID;
      self.currentSecret = Secrets.get({id: secretID});
    };
  }]
});
