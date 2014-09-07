var images = document.querySelectorAll('div.userContentWrapper img');

for (var i=0, len=images.length; i<len; i++) {
  console.log(images[i].src);
}
