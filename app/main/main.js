'use strict';

var mainModule = angular.module('cryptaApp.main', ['ngRoute', 'cryptaApp.core.category']);

mainModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {
    templateUrl: 'main/main.html',
    controller: 'MainCtrl'
  });
}]);

mainModule.controller('MainCtrl', ['appConfig', '$scope', function(appConfig, $scope) {
  console.log(appConfig);
}]);

// Show the categories in the list
mainModule.controller('CategoriesCtrl', ['$scope', 'Category', 'CategorySecrets', 'SecretService', function ($scope, Category, CategorySecrets, SecretService) {
  //fetch all categories. Issues a GET to /api/categories
  $scope.categories = Category.query(function (data) {
    for(var i=0; i < data.length; i++){
      var secrets = CategorySecrets.query({catId: data[i].id});
      data[i].secrets = secrets;
    }
  });

  $scope.loadSecrets = function (categoryId) {
    SecretService.loadSecrets(categoryId);
  };
}]);
