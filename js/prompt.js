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
