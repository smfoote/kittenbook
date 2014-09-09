describe('prompt.js', function() {

  describe('validatePhoneNumber', function() {

    it('should return a boolean', function() {
      var result = validatePhoneNumber('23456');
      expect(typeof result).toBe('boolean');
    });

  });
});
