// This code is for demonstration purposes only.
// You may need to replace it with your actual functionality.

const hero = document.querySelector('.hero');
const images = ['images/1.png', 'images/2.png', 'images/3.jpg']; // Add your image URLs here
let index = 0;

function changeBackground() {
    hero.style.backgroundImage = `url('${images[index]}')`;
    index = (index + 1) % images.length;
}

setInterval(changeBackground, 3000);
