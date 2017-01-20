"use strict";

var secretsModule = angular.module('cryptaApp.secrets');

secretsModule.component('secretsList', {
  templateUrl: 'secrets/secrets.html',
  controller: ['$scope', 'Secrets', function($scope, Secrets){
    this.secrets = Secrets.query();
    this.secrets.$promise.then(function (response) {
      $scope.secrets = response;
    });
    this.order = 'created';
  }]
});
