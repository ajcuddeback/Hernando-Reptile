async function getAdoptables(e) {
    const animalType = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/animals/${animalType}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (response.ok) {
        response.json()
            .then(data => {
                const adoptableWrapper = document.querySelector('.adopt-images-wrapper');

                if (data.length > 0) {
                    data.forEach(adoptable => {
                        const wrapperDiv = document.createElement('div');
                        const adoptableImage = document.createElement('img');

                        wrapperDiv.className = 'adoptablesgallery';
                        adoptableImage.className = 'adoptable-image';

                        adoptableImage.setAttribute('width', '200px');
                        adoptableImage.setAttribute('height', '200px');
                        adoptableImage.setAttribute('src', `${adoptable.image}`);
                        adoptableImage.setAttribute('data-image', `${adoptable.image}`);
                        adoptableImage.setAttribute('data-title', `${adoptable.name}`);
                        adoptableImage.setAttribute('data-desc', `${adoptable.about}`);

                        wrapperDiv.append(adoptableImage);
                        adoptableWrapper.append(wrapperDiv);


                        const modal = document.querySelector('.modal');
                        const fullImage = document.querySelector('.full-img');
                        const captionTitle = document.querySelector('.caption-title');
                        const captionDesc = document.querySelector('.caption-desc');

                        adoptableImage.addEventListener('click', (e) => {
                            modal.classList.add('open');
                            fullImage.classList.add('open');
                            const originalSrc = adoptableImage.getAttribute('data-image');
                            fullImage.src = originalSrc;
                            const dataTitle = e.target.getAttribute('data-title');
                            const dataDesc = e.target.getAttribute('data-desc');
                            captionTitle.textContent = dataTitle;
                            captionDesc.textContent = dataDesc;
                        })

                        modal.addEventListener('click', (e) => {
                            if (e.target.classList.contains('modal')) {
                                modal.classList.remove('open');
                                fullImage.classList.remove('open');
                            }

                        })
                    })
                } else {
                    const adoptableWrapper = document.querySelector('.adopt-images-wrapper');
                    const wrapperDiv = document.createElement('div');
                    const adoptableImage = document.createElement('img');

                    wrapperDiv.className = 'adoptablesgallery';
                    adoptableImage.className = 'adoptable-image';

                    adoptableImage.setAttribute('width', '200px');
                    adoptableImage.setAttribute('height', '200px');
                    adoptableImage.setAttribute('src', `../images/placeholder-adopt.jpg`);
                    adoptableImage.setAttribute('data-image', `../images/placeholder-adopt.jpg`);
                    adoptableImage.setAttribute('data-title', `No Adoptables Here!`);
                    adoptableImage.setAttribute('data-desc', `Visit back soon, we are always keeping up to date on our animals!`);

                    wrapperDiv.append(adoptableImage);
                    adoptableWrapper.append(wrapperDiv);


                    const modal = document.querySelector('.modal');
                    const fullImage = document.querySelector('.full-img');
                    const captionTitle = document.querySelector('.caption-title');
                    const captionDesc = document.querySelector('.caption-desc');

                    adoptableImage.addEventListener('click', (e) => {
                        modal.classList.add('open');
                        fullImage.classList.add('open');
                        const originalSrc = adoptableImage.getAttribute('data-image');
                        fullImage.src = originalSrc;
                        const dataTitle = e.target.getAttribute('data-title');
                        const dataDesc = e.target.getAttribute('data-desc');
                        captionTitle.textContent = dataTitle;
                        captionDesc.textContent = dataDesc;
                    })
                    modal.addEventListener('click', (e) => {
                        if (e.target.classList.contains('modal')) {
                            modal.classList.remove('open');
                            fullImage.classList.remove('open');
                        }

                    })
                }

            })
    }
}

getAdoptables();