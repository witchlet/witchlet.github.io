var strings = ["C a t c h", "K i t&nbsp f a l l i n g", "A l i c e","D i z z y&nbsp f o r e v e r", "A&nbsp p l a t f o r m"];
var scrollPercentToIndex = 0;

const text = document.getElementById("text");
var displayText = strings[0];
text.innerHTML = displayText;

document.addEventListener("scroll", (event) => {
    scrollPercentToIndex = Math.floor((getScrollPercent() / (100 / 5)));
    
    if (scrollPercentToIndex > 4) {
        scrollPercentToIndex = 4;
    }
    console.log(scrollPercentToIndex);

    displayText = strings[scrollPercentToIndex];
    text.innerHTML = displayText;
});

function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}

var links = ["/sculpture/catch.html",
            "/sculpture/kit-falling.html",
            "/sculpture/alice.html",
            "/sculpture/dizzy-forever.html",
            "/sculpture/a-platform.html"];

document.addEventListener("click", (event) => {
    window.open(links[scrollPercentToIndex], "_blank");
});