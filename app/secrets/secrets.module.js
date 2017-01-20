"use strict";

var secretsModule= angular.module('cryptaApp.secrets', [
  'ngResource'
]);

secretsModule.controller('SecretsListCtrl', ['$scope', 'Secrets', function($scope, Secrets){
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
}]);

// controller to edit the event or add a new one
secretsModule.controller('SecretFormCtrl', ['$scope', 'Secrets', function ($scope, Secrets) {

}]);
