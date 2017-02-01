'use strict';

var mainModule = angular.module('cryptaApp.main', ['ngRoute', 'cryptaApp.core.category']);

mainModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {
    templateUrl: 'main/main.html',
    controller: 'MainController'
  });
}]);

mainModule.controller('MainController', ['appConfig', '$scope', function(appConfig, $scope) {
  console.log(appConfig);
}]);

// Show the categories in the list
mainModule.controller('CategoriesCtrl', ['$scope', 'Category', 'CategorySecrets', 'SecretService', function ($scope, Category, CategorySecrets, SecretService) {
  //fetch all categories. Issues a GET to /api/categories
  $scope.categories = Category.query(function (data) {
    for(var i=0; i < data.length; i++){
      var secrets;
      secrets = CategorySecrets.query({catId: data[i].id});
      data[i].secrets = secrets;
    }
  });

  // Watch for change in current category selected
  $scope.$watch(
    function () {
      return SecretService.category();
    },
    function (newVal, oldVal, scope) {
      $scope.currentCategory = newVal;
    }
  );

  $scope.loadSecrets = function (categoryId) {
    SecretService.loadSecrets(categoryId);
  };
}]);
