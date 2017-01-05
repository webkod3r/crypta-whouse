'use strict';

describe('cryptaApp.version module', function() {
  beforeEach(module('cryptaApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
