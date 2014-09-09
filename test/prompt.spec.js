describe('prompt.js', function() {

  describe('validatePhoneNumber', function() {

    it('should return a boolean', function() {
      var result = validatePhoneNumber('23456');
      expect(typeof result).toBe('boolean');
    });

    it('should return true when given a 1-800 number', function() {
      var result = validatePhoneNumber('1-800-867-5309');

      // Change to the following when we know this test can fail:
      //
      // expect(result).toBe(true);
      //
      expect(result).toBe(false);
    });
  });
});
