let index = 0;
const adoptableCarousel = document.querySelector('.adoptable-carousel');
const mainCarouselImages = [
    './images/home-carousel/hc-0.jpg',
    './images/home-carousel/hc-1.jpg',
    './images/home-carousel/hc-2.jpg',
    './images/home-carousel/hc-3.jpg',
    './images/home-carousel/hc-4.jpg',
    './images/home-carousel/hc-5.jpg',
    './images/home-carousel/hc-6.jpg',
    './images/home-carousel/hc-7.jpg'
];
const adoptablesAnimals = [
    '../images/reptile-adoptables/reptile-adopt-0.jpg',
    '../images/reptile-adoptables/reptile-adopt-1.jpg',
    '../images/reptile-adoptables/reptile-adopt-2.jpg',
    '../images/reptile-adoptables/reptile-adopt-3.jpg',
    '../images/featured-adoptable.png',
    '../images/mamals-adopt.png',
    '../images/reptiles-adopt.png',
    '../images/birds-adoptables/bird-adopt-1.jpeg',
    '../images/featured-ambassador.png'
];
let mainCarouselCounter = 0;
const carouselSlide = function () {
    let slider = document.querySelector('#main-carousel');
    slider.setAttribute('src', mainCarouselImages[mainCarouselCounter]);
    if (mainCarouselCounter < mainCarouselImages.length - 1) {
        mainCarouselCounter++;
    } else {
        mainCarouselCounter = 0;
    }
    setTimeout('carouselSlide()', 5000);
}
window.onload = carouselSlide;