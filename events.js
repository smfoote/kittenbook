// get the greeting element using the id we just added in kittenbook.html
var greeting = document.getElementById('greeting');

// Create a listener for clicks on the greeting element
greeting.addEventListener('click', function() {
  if (greeting.innerHTML.match(/World/)) {
    greeting.innerHTML = 'Ola, mundo!';
  } else {
    greeting.innerHTML = 'Hello, World!';
  }
});
