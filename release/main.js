var kbValues = {
  projectName: 'kittenbook',
  versionNumber: '0.0.1'
};
var currentDate = new Date();  // Create Date object. More about objects and
                               // Date objects in chapter 5. This object will
                               // be used to build our date.

// currentTime will look like '2014-01-25 at 14:45:12'
var currentTime = currentDate.getFullYear() + '-' +  // Set year
                 (currentDate.getMonth() + 1)+ '-' + // Set month
                 currentDate.getDate() + ' at ' +    // Set day of the month
                 currentDate.getHours() + ':' +      // Set hours (military time)
                 currentDate.getMinutes() + ':' +    // Set minutes
                 currentDate.getSeconds();           // Set seconds

kbValues.currentTime = currentTime;

// Get the user's name.
var userName = prompt('Hello, what\'s your name?');
// Get the user's phone number.
var phoneNumber = prompt('Hello ' + userName +', what\'s your phone number?');
// Create the phone number pattern.
var phoneNumberPattern = /1?-?\(?\d{3}[\-\)]\d{3}-\d{4}/;
// Create a variable to store the output.
var output = '<h1>Hello, ' + userName + '!</h1>';

// Is the phone number valid?
if (phoneNumberPattern.test(phoneNumber)) {

  // Yes, the phone number is valid! Add the success message to the output.
  output = output + '<p>' + kbValues.projectName + ' ' + kbValues.versionNumber +
           ' viewed on: ' + kbValues.currentTime + '</p>';

} else {
  // No, the phone number is not valid. Tell the user about the problem.
  output = output + '<h2>That phone number is invalid: ' + phoneNumber;
}
// Insert the output into the web page.
document.body.innerHTML = output;

var images = document.querySelectorAll('div.userContentWrapper img');
