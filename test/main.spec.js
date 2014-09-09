describe('main.js', function() {
  describe('main', function() {
    it('should call getUserName', function() {
      spyOn(window, 'getUserName');
      main();
      expect(window.getUserName).toHaveBeenCalled();
    });

    it('should call getPhoneNumber with the value from getUserName', function() {
      spyOn(window, 'getUserName').and.returnValue('Jimmy');
      spyOn(window, 'getPhoneNumber');
      main();
      expect(window.getPhoneNumber).toHaveBeenCalled();
      expect(window.getPhoneNumber.calls.mostRecent().args[0]).toEqual('Jimmy');
    });

    it('should call getLocation with the value from getPhoneNumber', function() {
      spyOn(window, 'getPhoneNumber').and.returnValue('702-555-4765');
      spyOn(window, 'getLocation');
      main();
      expect(window.getLocation).toHaveBeenCalled();
      expect(window.getLocation.calls.mostRecent().args[0]).toEqual('702-555-4765');
    });

    it('should call getImages', function() {
      spyOn(window, 'getImages').and.returnValue([new Image()]);
      main();
      expect(window.getImages).toHaveBeenCalled();
    });

    it('should call replaceImages with the array from getImages and the location from getLocation', function(done) {
      var images = [new Image()];
      spyOn(window, 'getImages').and.returnValue(images);
      spyOn(window, 'getLocation').and.returnValue('Las Vegas');
      spyOn(window, 'replaceImages');
      main();

      // Because main.js waits 3 seconds before it calls replaceImages, we have to wait 3 seconds
      // before we check that replaceImages was called.
      setTimeout(function() {
        expect(window.replaceImages).toHaveBeenCalled();
        expect(window.replaceImages.calls.mostRecent().args[0]).toEqual(images);
        expect(window.replaceImages.calls.mostRecent().args[1]).toEqual('Las Vegas');
        done();
      }, 3050);
    });
  });
});
