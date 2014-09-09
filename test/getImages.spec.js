describe('getImages.js', function() {
  describe('getImages', function() {
    it('should call document.querySelectorAll and return the result', function() {
      var result;
          images = [new Image()];
      spyOn(document, 'querySelectorAll').and.returnValue(images);
      result = getImages();
      expect(document.querySelectorAll).toHaveBeenCalled();
      expect(result).toEqual(images);
    });
  });
});
