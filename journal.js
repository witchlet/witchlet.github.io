//random line spacing
const paragraph = document.querySelector(".spaced");
var number = Math.floor(Math.random()*250);
paragraph.style.wordSpacing = number + "px";

//random background image
const body = document.querySelector("body");
var images = ['background1.jpg', 'background2.jpg', 'background3.jpg', 'background4.jpg',
            'background5.jpg', 'background6.jpg', 'background7.jpg', 'background8.jpg',
            'background9.jpg', 'background10.jpg', 'background11.jpg', 'background12.jpg',
            'background13.jpg', 'background14.jpg'];
var randomImage = "url(images/journal/" + images[Math.floor(Math.random() * images.length)] + ")";
body.style.backgroundImage = randomImage;

//random text
const text = document.getElementById("paragraph");
var randomText = strings[Math.floor(Math.random() * strings.length)];
text.innerHTML = randomText;

//reload every .15 seconds unless you 
var clicked = false;

document.addEventListener("click", function(event) {
    clicked = true;
});
setTimeout(function() {
    if (!clicked) {
        location.reload();
    }
    
}, Math.floor(Math.random() * 300 + 25));