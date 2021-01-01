const reptilesImages = document.querySelector('.reptile-adopt-images');
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
        let imageHolder = document.createElement('div');
        imageHolder.classList.add('image-holder','reptile'+i);
        let lizList = document.createElement('img');
        lizList.setAttribute('src',reptilesImgdArr[i]);
        lizList.setAttribute('data-reptile','lizard'+i)
        lizList.classList.add('reptile');
        imageHolder.appendChild(lizList);
        reptilesImages.appendChild(imageHolder);        
    }
    console.log(reptilesImages)
}


$(document).ready(function(){
    let titleAndDesc = document.createElement('div');
    titleAndDesc.classList.add('title-and-desc');
    const reptileTitles = document.createElement('h2');
    const reptileDescription = document.createElement('p');
    $('.reptile-adopt-images').hover(function(e){
        
        let reptile = e.target.getAttribute('data-reptile');
        if (reptile==="lizard0"){
            let reptile0 = document.querySelector('.reptile0');
            reptileTitles.textContent = reptilesTitle[0];
            reptileDescription.textContent = reptilesDesc[0];
            titleAndDesc.appendChild(reptileTitles);
            titleAndDesc.appendChild(reptileDescription);
            reptile0.appendChild(titleAndDesc);
            console.log(reptile0)
            
        }else if (reptile==="lizard1"){
            let reptile1 = document.querySelector('.reptile1');
            reptileTitles.textContent = reptilesTitle[1];
            reptileDescription.textContent = reptilesDesc[1];
            titleAndDesc.appendChild(reptileTitles);
            titleAndDesc.appendChild(reptileDescription);
            reptile1.appendChild(titleAndDesc);
            console.log(reptile1)
        }else if (reptile==="lizard2"){
            let reptile2 = document.querySelector('.reptile2');
            reptileTitles.textContent = reptilesTitle[2];
            reptileDescription.textContent = reptilesDesc[2];
            titleAndDesc.appendChild(reptileTitles);
            titleAndDesc.appendChild(reptileDescription);
            reptile2.appendChild(titleAndDesc);
            console.log(reptile2)
            console.log('2')
        }else if (reptile==="lizard3"){
            let reptile3 = document.querySelector('.reptile3');
            reptileTitles.textContent = reptilesTitle[3];
            reptileDescription.textContent = reptilesDesc[3];
            titleAndDesc.appendChild(reptileTitles);
            titleAndDesc.appendChild(reptileDescription);
            reptile3.appendChild(titleAndDesc);
            console.log(reptile3)
            console.log('3')
        }else if (reptile==="lizard4"){
            let reptile4 = document.querySelector('.reptile0');
            reptileTitles.textContent = reptilesTitle[4];
            reptileDescription.textContent = reptilesDesc[4];
            titleAndDesc.appendChild(reptileTitles);
            titleAndDesc.appendChild(reptileDescription);
            reptile4.appendChild(titleAndDesc);
            console.log(reptile4)
            console.log('4')
        }
        
        
    },
    function(){
        titleAndDesc.innerHTML = "";

    });
});
