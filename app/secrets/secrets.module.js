"use strict";

var secretsModule= angular.module('cryptaApp.secrets', [
  'ngResource'
]);

//
// handler module for secretList component
//
secretsModule.controller('SecretsListCtrl', ['$rootScope', '$scope', 'Secrets', 'SecretService', function($rootScope, $scope, Secrets, SecretService){
  var self = this;
  self.secrets = SecretService.secrets();

  // watch for changes in SecretService
  $scope.$watch(
    function () {
      return SecretService.secrets();
    },
    function (newVal, oldVal, scope) {
      console.log('change on secrets', arguments);
      self.secrets = newVal;
    }
  );

  // get info from secret
  this.loadSecret = function (secretID) {
    self.selected = secretID;
    self.currentSecret = Secrets.get({id: secretID}).$promise.then(function (data) {
      SecretService.current(data);
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
      return SecretService.current();
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
    console.log(SecretService.current());
  };
}]);
