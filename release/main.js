var kbValues = {
  projectName: 'kittenbook',
  versionNumber: '0.0.1',
  areaCodes: {
    '408': 'Silicon Valley',
    '702': 'Las Vegas',
    '801': 'Northern Utah',
    '765': 'West Lafayette',
    '901': 'Memphis',
    '507': 'Rochester, MN'
  }
};

/**
 * Return the area codes object from kbValues
 * @method getAreaCodes
 * @return {object}
 */
function getAreaCodes() {
  return kbValues.areaCodes;
}

/**
 * Ask for the user's name, twice if necessary.
 * @method getUserName
 * @return {string} The user's name
 */
function getUserName() {
  var userName = prompt('Hello, what\'s your name?');

  if (!userName) {
    userName = prompt('You didn\'t enter a name. Really, what\'s your name?');
  }
  return userName;
}

/**
 * Check the validity of a phone number
 * @method
 * @param {string} phoneNumber The phone number to be validated
 * @return {boolean}
 */
function validatePhoneNumber(phoneNumber) {
  return (/(?:1-)?\(?(\d{3})(?:-|\) ?)\d{3}-\d{4}/).test(phoneNumber);
}

/**
 * Ask for the user's phone number, twice if necessary.
 * @method getPhoneNumber
 * @param {string} userName The user's name (so we can politely address them when requesting the
 * phone number)
 * @return {string}
 */
function getPhoneNumber(userName) {
  var phoneNumber = prompt('Hello ' + userName +', what\'s your phone number?');
  if (!validatePhoneNumber(phoneNumber)) {
    phoneNumber = prompt('Please enter a valid phone number.');
  }
  return phoneNumber;
}

/**
 * Determine location based on phone number
 * @method getLocation
 * @param {string} phoneNumber
 * @return {string}
 */
function getLocation(phoneNumber) {
  // Create the phone number pattern.
  var phoneNumberPattern = /(?:1-)?\(?(\d{3})[\-\)]\d{3}-\d{4}/;
  // Get matches from phoneNumber
  var phoneMatches = phoneNumberPattern.exec(phoneNumber);
  var areaCodes, areaCode, locationName;
  if (phoneMatches) {
    areaCode = phoneMatches[1];
    areaCodes = getAreaCodes();
    locationName = areaCodes[areaCode];
  }

  // Look, it’s a ternary operator.
  // Return the locationName if it exists, else return ‘somewhere’
  return locationName ? locationName : 'somewhere';
}

/**
 * Get a list of all images in the Facebook feed
 * @method getImages
 * @return {NodeList}
 */
function getImages() {
  var images = document.querySelectorAll('div.userContentWrapper img, div.pinHolder img');
  return images;
}

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

/**
 * Execute the kittenbook program.
 * @method main
 */

function main() {
  var userName = getUserName();
  var phoneNumber = getPhoneNumber(userName);
  var location = getLocation(phoneNumber);
  var images = getImages();

  // setInterval is like setTimeout, except it repeats its code instead of
  // executing it just once. Use setInterval to replace new images that are
  // loaded as you scroll down the page.
  setInterval(function() {
    images = getImages();
    replaceImages(images, location);
  }, 3000);
}

main();
