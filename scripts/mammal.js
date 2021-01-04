const modal = document.querySelector('.modal');
const fullImage = document.querySelector('.full-img');
const captionTitle = document.querySelector('.caption-title');
const captionDesc = document.querySelector('.caption-desc');
const mammalGallery = document.querySelectorAll('.mammal-gallery');

mammalGallery.forEach(mammal=>{
    mammal.addEventListener('click', (e)=>{
        modal.classList.add('open');
        fullImage.classList.add('open');
        const originalSrc = mammal.getAttribute('data-image');
        fullImage.src = originalSrc;
        const dataTitle = e.target.getAttribute('data-title');
        const dataDesc = e.target.getAttribute('data-desc');
        captionTitle.textContent = dataTitle;
        captionDesc.textContent = dataDesc;
        console.log(captionTitle);
        console.log(dataDesc)      
    });
});

modal.addEventListener('click',(e)=>{
    if (e.target.classList.contains('modal')){
        modal.classList.remove('open');
        fullImage.classList.remove('open');
    }

})