describe('prompt.js', function() {

  describe('getUserName', function() {
    it('should call window.prompt', function() {
      var result;
      spyOn(window, 'prompt');
      result = getUserName();
      expect(window.prompt).toHaveBeenCalled();
    });
  });

  describe('validatePhoneNumber', function() {
    it('should return a boolean', function() {
      var result = validatePhoneNumber('23456');
      expect(typeof result).toBe('boolean');
    });

    it('should return false for alphanumeric strings', function() {
      var result = validatePhoneNumber('No way!');
      expect(result).toBe(false);
    });

    it('should return false for poorly formatted 10 digit numbers', function() {
      var result = validatePhoneNumber('702-5555432');
      expect(result).toBe(false);
    });

    it('should return true for parentheses around area codes', function() {
      var result = validatePhoneNumber('(702)555-4321');
      expect(result).toBe(true);
    });

    it('should return true for parentheses around area codes with a space', function() {
      var result = validatePhoneNumber('(702) 555-4321');
      expect(result).toBe(true);
    });

    it('should return true when separated by dashes', function() {
      var result = validatePhoneNumber('702-555-4321');
      expect(result).toBe(true);
    });

    it('should return true with a preceding "1-"', function() {
      var result = validatePhoneNumber('1-(702) 555-4321');
      expect(result).toBe(true);
      result = validatePhoneNumber('1-(702)555-4321');
      expect(result).toBe(true);
      result = validatePhoneNumber('1-702-555-4321');
      expect(result).toBe(true);
    });
  });

  describe('getPhoneNumber', function() {
    it('should call window.prompt', function() {
      var result;
      spyOn(window, 'prompt');
      result = getPhoneNumber();
      expect(window.prompt).toHaveBeenCalled();
    });
  });

  describe('getLocation', function() {
    it('should return a string', function() {
      var result = getLocation('702-555-5678');
      expect(typeof result).toEqual('string');
    });

    it('should call getAreaCodes', function() {
      spyOn(window, 'getAreaCodes').and.returnValue({'801': 'Utah'});
      getLocation('801-555-2983');
      expect(window.getAreaCodes).toHaveBeenCalled();
    });

    it('should return the correct location', function() {
      var areaCodes = getAreaCodes(),
          correctLocation = areaCodes['901'],
          result = getLocation('901-555-4242');
      expect(result).toEqual(correctLocation);
    });

    it('should return "somewhere" for unkown area codes', function() {
      var result = getLocation('555-555-5555');
      expect(result).toEqual('somewhere');
    });
  });
});
