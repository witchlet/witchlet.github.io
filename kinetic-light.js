//random background image
const body = document.querySelector("body");
var images = ['IMG_5394.jpg', 'IMG_5404.jpg', 'IMG_5412.jpg', 'IMG_5426.jpg'];
var randomImage = "url(images/kinetic-light/" + images[Math.floor(Math.random() * images.length)] + ")";
body.style.backgroundImage = randomImage;
