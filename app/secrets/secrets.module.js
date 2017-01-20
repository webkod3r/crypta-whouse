"use strict";

var secretsModule= angular.module('cryptaApp.secrets', [
  'ngResource'
]);

secretsModule.controller('SecretsListCtrl', ['$rootScope', 'Secrets', 'SecretService', function($rootScope, Secrets, SecretService){
  var self = this;
  var secrets = Secrets.query();
  secrets.$promise.then(function (response) {
    self.secrets = response;
  });
  this.order = 'created';

  this.loadSecret = function (secretID) {
    self.selected = secretID;
    self.currentSecret = Secrets.get({id: secretID}).$promise.then(function (data) {
      SecretService.current = data;
    });
    SecretService.showForm = true;
    $rootScope.SecretService = SecretService;
  };
}]);

// controller to edit the event or add a new one
secretsModule.controller('SecretFormCtrl', ['$scope', 'Secrets', 'SecretService', function ($scope, Secrets, SecretService) {
  var self = this;

  // watch for changes in SecretService
  $scope.$watch(
    function () {
      return SecretService.current;
    },
    function (newVal, oldVal, scope) {
      // newVal have the current Secret
      if (newVal) {
        self.secretId = newVal.id;
        self.secretName = newVal.name;
      }
    }
  );

  this.submitSecret = function () {
    console.log(SecretService.current);
  };
}]);
