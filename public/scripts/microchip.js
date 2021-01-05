let microchipCounter = 0;


const microchipImages = [
    '../images/PIT-micro-carousel/pc-0.jpg',
    '../images/PIT-micro-carousel/pc-1.jpg',
    '../images/PIT-micro-carousel/pc-2.jpg',
    '../images/PIT-micro-carousel/pc-3.jpg',
    '../images/PIT-micro-carousel/pc-4.jpg',
    '../images/PIT-micro-carousel/pc-5.jpg',
    '../images/PIT-micro-carousel/pc-6.jpg',
    '../images/PIT-micro-carousel/pc-7.jpg',
    '../images/PIT-micro-carousel/pc-8.jpg',
];

const microchipSlide = function () {
    const microchipImage = document.querySelector('.micro-slide');
    microchipImage.setAttribute('src', microchipImages[microchipCounter]);
    if (microchipCounter < microchipImages.length - 1) {
        microchipCounter++;
    } else {
        microchipCounter = 0;
    }
    setTimeout('microchipSlide()', 5000);
}
window.onload = microchipSlide;