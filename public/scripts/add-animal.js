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
};

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
                const tableBody = document.querySelector('.table-body')

                data.forEach(animal => {
                    const tableWrapper = document.createElement('tr');
                    const typeHeading = document.createElement('td');
                    const nameHeading = document.createElement('td');
                    const infoHeading = document.createElement('td');
                    const deleteHeading = document.createElement('td');

                    const deleteIcon = document.createElement('i');
                    deleteIcon.className = "fas fa-trash-alt";
                    deleteIcon.setAttribute('id', `${animal.id}`)

                    deleteHeading.append(deleteIcon)

                    typeHeading.textContent = animal.animal_type;
                    nameHeading.textContent = animal.name;
                    infoHeading.textContent = animal.about;

                    tableWrapper.append(typeHeading);
                    tableWrapper.append(nameHeading);
                    tableWrapper.append(infoHeading);
                    tableWrapper.append(deleteHeading);

                    tableBody.append(tableWrapper)
                })

                async function deleteAnimal(e) {
                    const id = e.target.getAttribute('id');
                    console.log(e.target)

                    const response = await fetch(`/api/animals/${id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })

                    if(response.ok) {
                        document.location.reload();
                    } else {
                        console.log('error!')
                    }
                }

                document.querySelectorAll('.fa-trash-alt').forEach(button => {
                    button.addEventListener('click', deleteAnimal)
                })
            })
    }
}

getAnimals();

document.getElementById('add-animal-form').addEventListener('submit', addAnimalHandler)