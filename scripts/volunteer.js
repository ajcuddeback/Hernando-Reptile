

const volunteerImages = [
    '../images/volunteer-carousel/vc-0.jpg',
    '../images/volunteer-carousel/vc-1.jpg',
    '../images/volunteer-carousel/vc-2.jpg',
    '../images/volunteer-carousel/vc-3.jpg',
    '../images/volunteer-carousel/vc-4.jpg',
    '..clear/images/volunteer-carousel/vc-5.jpg',
    '../images/volunteer-carousel/vc-6.jpg',
    '../images/volunteer-carousel/vc-7.jpg',
    '../images/volunteer-carousel/vc-8.jpg',
];

let volunteerCounter = 0;
const volunteerSlide = function () {
    const volunteerImage = document.querySelector('.volunteer-image');
    volunteerImage.setAttribute('src', volunteerImages[volunteerCounter]);
    if (volunteerCounter < volunteerImages.length - 1) {
        volunteerCounter++;
    } else {
        volunteerCounter = 0;
    }
    setTimeout('volunteerSlide()', 5000);
}
window.onload = volunteerSlide;
