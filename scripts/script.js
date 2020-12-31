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
    '../images/reptile-adoptables/reptile-adopt-4.jpg',
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


let prevBtn = document.querySelector('.prevBtn');
let nextBtn = document.querySelector('.nextBtn');

let adopt1 = document.getElementById('adopt1');
let adopt2 = document.getElementById('adopt2');
let adopt3 = document.getElementById('adopt3');

prevBtn.addEventListener('click', () => {
    if (index < adoptablesAnimals.length - 3) {

        adopt1.setAttribute('src', adoptablesAnimals[index])
        adopt2.setAttribute('src', adoptablesAnimals[index + 1])
        adopt3.setAttribute('src', adoptablesAnimals[index + 2])

        console.log(adopt1)
        console.log(adopt2)
        console.log(adopt3)

        index++;

    } else {
        index = 0;
        adopt1.setAttribute('src', adoptablesAnimals[index])
        adopt2.setAttribute('src', adoptablesAnimals[index + 1])
        adopt3.setAttribute('src', adoptablesAnimals[index + 2])

    }
})

nextBtn.addEventListener('click', () => {
    if (index < adoptablesAnimals.length - 3) {

        adopt1.setAttribute('src', adoptablesAnimals[index + 2])
        adopt2.setAttribute('src', adoptablesAnimals[index + 1])
        adopt3.setAttribute('src', adoptablesAnimals[index])

        console.log(adopt1)
        console.log(adopt2)
        console.log(adopt3)

        index++;

    } else {
        index = 0;
        adopt1.setAttribute('src', adoptablesAnimals[index + 2])
        adopt2.setAttribute('src', adoptablesAnimals[index + 1])
        adopt3.setAttribute('src', adoptablesAnimals[index])

    }

    // const adoptableWidth = adoptableCarousel.clientWidth;
    // adoptableCarousel.style.transform = `translateX(${-adoptableWidth/5}px)`;
})








