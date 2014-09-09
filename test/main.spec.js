describe('main.js', function() {
  describe('main', function() {

    it('should call getUserName', function() {
      spyOn(window, 'getUserName');
      main();
      expect(getUserName).toHaveBeenCalled();
    });

    it('should call getPhoneNumber with the value from getUserName', function() {
      spyOn(window, 'getUserName').and.returnValue('Jimmy');
      spyOn(window, 'getPhoneNumber');
      main();
      expect(getPhoneNumber).toHaveBeenCalled();
      expect(getPhoneNumber.calls.mostRecent().args[0]).toBe('Jimmy');
    });
  });
});
