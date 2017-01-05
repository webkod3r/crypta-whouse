'use strict';

angular.module('cryptaApp.version', [
  'cryptaApp.version.interpolate-filter',
  'cryptaApp.version.version-directive'
])

.value('version', '0.1');
