async function addAnimalHandler(event) {
    event.preventDefault()
    const animalType = document.querySelector('#animal-types').value
    const name = document.querySelector('#animal-name').value;
    const about = document.querySelector('#animal-info').value;
    const image = document.querySelector('#create-image').src;

    const response = await fetch('/api/animals', {
        method: 'POST',
        body: JSON.stringify({
            animalType,
            name,
            about,
            image
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if(response.ok) {
        window.location.reload();
    } else {
        console.log('ERRORRRRRR')
    }
}

async function getAnimals(event) {
    const response = await fetch('/api/animals', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if(response.ok) {
        response.json()
            .then(data => {
                const typeWrapper = document.querySelector('.type-wrapper');
                const nameWrapper = document.querySelector('.name-wrapper');
                const infoWrapper = document.querySelector('.info-wrapper');
                const deleteWrapper = document.querySelector('.delete-wrapper');

                data.forEach(animal => {
                    const typeHeading = document.createElement('h3');
                    const nameHeading = document.createElement('h3');
                    const infoHeading = document.createElement('h3');
                    const deleteHeading = document.createElement('h3');

                    typeHeading.textContent = animal.animal_type;
                    nameHeading.textContent = animal.name;
                    infoHeading.textContent = animal.about;
                    deleteHeading.textContent = 'delete';

                    typeWrapper.append(typeHeading);
                    nameWrapper.append(nameHeading);
                    infoWrapper.append(infoHeading);
                    deleteWrapper.append(deleteHeading);
                })
            })
    }
}

getAnimals();

document.getElementById('add-animal-form').addEventListener('submit', addAnimalHandler)