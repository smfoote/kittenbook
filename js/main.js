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
