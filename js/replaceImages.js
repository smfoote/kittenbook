/**
 * Get the height of an HTML image
 * @method getImageHeight
 * @param {Image} image
 */
function getImageHeight(image) {
  return image.height;
}

/**
 * Get the width of an HTML image
 * @method getImageWidth
 * @param {Image} image
 */
function getImageWidth(image) {
  return image.width;
}

/**
 * Replace replace the `src` attribute of a list of images with images of the same width and height
 * from placekitten or placepuppy, depending on location.
 * @method replaceImages
 * @param {Images[]} images A list of HTML Images to be replaced. The list can be an Array or
 * NodeList.
 * @param {string} location A location string used to determine what kind of image to show.
 */
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
