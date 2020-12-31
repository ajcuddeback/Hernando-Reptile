const reptilesImages = document.querySelector('.reptile-adopt-images');
let imageHolder = document.createElement('div');
const reptilesImgdArr = [
    '../images/reptile-adoptables/reptile-adopt-0.jpg',
    '../images/reptile-adoptables/reptile-adopt-1.jpg',
    '../images/reptile-adoptables/reptile-adopt-2.jpg',
    '../images/reptile-adoptables/reptile-adopt-3.jpg',
    '../images/reptile-adoptables/reptile-adopt-4.jpg',
]
const reptilesTitle = [
    'Sequoia',
    'Harley',
    'Finn',
    'Dipstick',
    'Pipsqueak'
];

const reptilesDesc = [
    'Cherry-headed Red Foot Tortoise (F, Approx. 2 Y/O) - Adoption fee: $300',
    'Ball Python (M - Queen Bee Morph, Approx 3 y/o)',
    'Young Rat Snake (Sex/Age Unknown)  Adoption fee: $75 (Includes Enclosure)',
    'Young Ball Python - Normal (Sex/Age Unknown) - Adoption fee: $50',
    'Juvenille Ball Python  - Normal (Sex/Age Unknown) - Adoption fee: $50'
]
 
window.onload = ()=>{
  
    for(let i = 0; i<reptilesImgdArr.length;i++){
        imageHolder.classList.add('image-holder'+i);
        let lizList = document.createElement('img');
        lizList.setAttribute('src',reptilesImgdArr[i]);
        lizList.setAttribute('data-reptile','lizard'+i)
        lizList.classList.add('reptile');
        imageHolder.appendChild(lizList);
        reptilesImages.appendChild(imageHolder);        
    }
}
$(document).on('mouseover', '.reptile-adopt-images', function (e) {

    const reptileTitles = document.createElement('h2');
    const reptileDescription = document.createElement('p');
    let reptile = e.target.getAttribute('data-reptile');
    if (reptile==='lizard0'){
        reptileTitles.textContent = reptilesTitle[0];
        reptileDescription.textContent = reptilesDesc[0];
        imageHolder.appendChild(reptileTitles);
        imageHolder.appendChild(reptileDescription);

    }else if (reptile==='lizard1'){
        reptileTitles.textContent = reptilesTitle[1];
        reptileDescription.textContent = reptilesDesc[1];
        imageHolder.appendChild(reptileTitles);
        imageHolder.appendChild(reptileDescription);      

    }else if(reptile==='lizard2'){
        reptileTitles.textContent = reptilesTitle[2];
        reptileDescription.textContent = reptilesDesc[2];
        imageHolder.appendChild(reptileTitles);
        imageHolder.appendChild(reptileDescription);      

    }else if(reptile==='lizard3'){
        reptileTitles.textContent = reptilesTitle[3];
        reptileDescription.textContent = reptilesDesc[3];
        imageHolder.appendChild(reptileTitles);
        imageHolder.appendChild(reptileDescription);    

    }else if (reptile==='lizard4'){
        reptileTitles.textContent = reptilesTitle[4];
        reptileDescription.textContent = reptilesDesc[4];
        imageHolder.appendChild(reptileTitles);
        imageHolder.appendChild(reptileDescription);   

    }

})