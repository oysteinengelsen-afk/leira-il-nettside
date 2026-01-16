const images = [
    "bilder/lag1.jpg",
    "bilder/lag2.jpg",
    "bilder/lag3.jpg",
    "bilder/lag4.jpg"
];

let currentIndex = 0;

const heroImage = document.getElementById("heroImage");

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    heroImage.src = images[currentIndex];
}, 5000);
