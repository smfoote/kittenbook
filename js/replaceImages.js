function getImageHeight(image) {
  return image.height;
}

function getImageWidth(image) {
  return image.width;
}

function replaceImages(images, location) {
  var baseImageUrl, height, width, image;
  switch (location) {
  case 'Memphis':
    // Use puppies for Memphis
    baseImageUrl = 'http://placepuppy.it/';
    break;
  default:
    // use kittens everywhere else
    baseImageUrl = 'http://placekitten.com/g/';
    break;
  }
  for (var i=0,len=images.length; i<len; i++) {
    image = images[i];
    height = getImageHeight(image);
    width = getImageWidth(image);
    image.src = baseImageUrl + width + '/' + height;
  }
}
