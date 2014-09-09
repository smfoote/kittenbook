/**
 * Get a list of all images in the Facebook feed
 * @method getImages
 * @return {NodeList}
 */
function getImages() {
  var images = document.querySelectorAll('div.userContentWrapper img, div.pinHolder img');
  return images;
}
