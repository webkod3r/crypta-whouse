'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('cryptaApp', [
  'ngRoute',
  'ngResource',
  'cryptaApp.core',
  'cryptaApp.main',
  'cryptaApp.version',
  'cryptaApp.secrets'
]);
