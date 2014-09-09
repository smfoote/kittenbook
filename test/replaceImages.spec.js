describe('replaceImages.js', function() {
  describe('getImageHeight', function() {
   it('should return a number', function() {
     var image = new Image(),
         result = getImageHeight(image);
     expect(typeof result).toEqual('number');
   });

   it('should return the height of the given image', function() {
     var image = new Image(),
         result;
     image.height = 200;
     result = getImageHeight(image);
     expect(result).toEqual(200);
   });
 });

 describe('getImageWidth', function() {
   it('should return a number', function() {
     var image = new Image(),
         result = getImageWidth(image);
     expect(typeof result).toEqual('number');
   });

   it('should return the width of the given image', function() {
     var image = new Image(),
         result;
     image.width = 200;
     result = getImageWidth(image);
     expect(result).toEqual(200);
   });
 });

  describe('replaceImages', function() {
    it('should call getImageHeight for each image', function() {
      var images = [new Image(), new Image(), new Image()];
      spyOn(window, 'getImageHeight');
      replaceImages(images, 'Utah');
      expect(window.getImageHeight.calls.count()).toEqual(3);
    });

    it('should call getImageWidth for each image', function() {
      var images = [new Image(), new Image(), new Image()];
      spyOn(window, 'getImageWidth');
      replaceImages(images, 'Utah');
      expect(window.getImageWidth.calls.count()).toEqual(3);
    });

    it('should use http://placepuppy.it if the location is "Memphis"', function() {
      var images = [new Image()];
      replaceImages(images, 'Memphis');
      expect(images[0].src.indexOf('http://placepuppy.it')).toBeGreaterThan(-1);
    });

    it('should use http://placekitten.com if the location is anywhere but "Memphis"', function() {
      var images = [new Image()];
      replaceImages(images, 'Nashville');
      expect(images[0].src.indexOf('http://placekitten.com')).toBeGreaterThan(-1);
    });

    it('should correctly set the width and height on the URL', function() {
      var image = new Image(),
          images = [];
      image.width = 300;
      image.height = 100;
      images.push(image);
      replaceImages(images, 'Utah');
      expect(images[0].src).toEqual('http://placekitten.com/g/300/100');
    })
  });
});
