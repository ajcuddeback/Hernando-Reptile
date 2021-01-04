// const reptilesImages = document.querySelector('.reptile-adopt-images');
// let titleAndDesc = document.createElement('div');
// titleAndDesc.classList.add('title-and-desc');
// const reptileTitles = document.createElement('h2');
// const reptileDescription = document.createElement('p');
// const reptilesImagesArr = [
//     '../images/reptile-adoptables/reptile-adopt-0.jpg',
//     '../images/reptile-adoptables/reptile-adopt-1.jpg',
//     '../images/reptile-adoptables/reptile-adopt-2.jpg',
//     '../images/reptile-adoptables/reptile-adopt-3.jpg',
//     '../images/reptile-adoptables/reptile-adopt-4.jpg',
// ]
// const reptilesTitle = [
//     'Sequoia',
//     'Harley',
//     'Finn',
//     'Dipstick',
//     'Pipsqueak'
// ];
// const reptilesDesc = [
//     'Cherry-headed Red Foot Tortoise (F, Approx. 2 Y/O) - Adoption fee: $300',
//     'Ball Python (M - Queen Bee Morph, Approx 3 years old)',
//     'Young Rat Snake (Sex/Age Unknown)  Adoption fee: $75 (Includes Enclosure)',
//     'Young Ball Python - Normal (Sex/Age Unknown) - Adoption fee: $50',
//     'Juvenille Ball Python  - Normal (Sex/Age Unknown) - Adoption fee: $50'
// ]
 
// window.onload = ()=>{
//     for(let i = 0; i<reptilesImagesArr.length;i++){
//         let imageHolder = document.createElement('div');
//         imageHolder.classList.add('image-holder','reptile'+i);
//         let lizList = document.createElement('img');
//         lizList.setAttribute('src',reptilesImagesArr[i]);
//         lizList.setAttribute('data-reptile','lizard'+i)
//         lizList.classList.add('reptile');
//         imageHolder.appendChild(lizList);
//         reptilesImages.appendChild(imageHolder);        
//     }
//     console.log(reptilesImages)
// }
// $(document).on('click', '.reptile', (e)=> {
//     const marginRemove = document.querySelector('.reptile');
//     marginRemove.style.marginLeft = "0";
//     let reptileLizard = e.target.getAttribute('data-reptile');
//     if (reptileLizard === 'lizard0'){
//         const lizardReptile0 = document.querySelector('.information-page');
//         lizardReptile0.classList.add('information-page-move-in');
//         const informationImage = document.querySelector('.information-image');
//         const lizRepImg = document.querySelector('.reptile0');
//         lizRepImg.classList.remove('image-holder');
//         const informationText = document.querySelector('.information-text');
//         reptileTitles.textContent = reptilesTitle[0];
//         reptileDescription.textContent = reptilesDesc[0];
//         titleAndDesc.appendChild(reptileTitles);
//         titleAndDesc.appendChild(reptileDescription);
//         informationText.appendChild(titleAndDesc);
//         informationImage.appendChild(lizRepImg)
//         console.log(lizardReptile0);
//     }else if (reptileLizard === 'lizard1'){
//         const lizardReptile1 = document.querySelector('.information-page');
//         lizardReptile1.classList.add('information-page-move-in');
//         const informationImage = document.querySelector('.information-image');
//         const lizRepImg = document.querySelector('.reptile1');
//         const informationText = document.querySelector('.information-text');
//         reptileTitles.textContent = reptilesTitle[1];
//         reptileDescription.textContent = reptilesDesc[1];
//         titleAndDesc.appendChild(reptileTitles);
//         titleAndDesc.appendChild(reptileDescription);
//         informationText.appendChild(titleAndDesc);
//         informationImage.appendChild(lizRepImg)

//         console.log(lizardReptile1);
//     }else if (reptileLizard === 'lizard2'){
//         const lizardReptile2 = document.querySelector('.information-page');
//         lizardReptile2.classList.add('information-page-move-in');
//         const informationImage = document.querySelector('.information-image');
//         const lizRepImg = document.querySelector('.reptile2');
//         const informationText = document.querySelector('.information-text');
//         reptileTitles.textContent = reptilesTitle[2];
//         reptileDescription.textContent = reptilesDesc[2];
//         titleAndDesc.appendChild(reptileTitles);
//         titleAndDesc.appendChild(reptileDescription);
//         informationText.appendChild(titleAndDesc);
//         informationImage.appendChild(lizRepImg)
//         console.log(lizardReptile2);
//     }else if (reptileLizard === 'lizard3'){
//         const lizardReptile3 = document.querySelector('.information-page');
//         lizardReptile3.classList.add('information-page-move-in');
//         const informationImage = document.querySelector('.information-image');
//         const lizRepImg = document.querySelector('.reptile3');
//         const informationText = document.querySelector('.information-text');
//         reptileTitles.textContent = reptilesTitle[3];
//         reptileDescription.textContent = reptilesDesc[3];
//         titleAndDesc.appendChild(reptileTitles);
//         titleAndDesc.appendChild(reptileDescription);
//         informationText.appendChild(titleAndDesc);
//         informationImage.appendChild(lizRepImg)
//         console.log(lizardReptile3);
//     }else if (reptileLizard === 'lizard4'){
//         const lizardReptile4 = document.querySelector('.information-page');
//         lizardReptile4.classList.add('information-page-move-in');
//         const informationImage = document.querySelector('.information-image');
//         const lizRepImg = document.querySelector('.reptile4');
//         const informationText = document.querySelector('.information-text');
//         reptileTitles.textContent = reptilesTitle[4];
//         reptileDescription.textContent = reptilesDesc[4];
//         titleAndDesc.appendChild(reptileTitles);
//         titleAndDesc.appendChild(reptileDescription);
//         informationText.appendChild(titleAndDesc);
//         informationImage.appendChild(lizRepImg)
//         console.log(lizardReptile4);
//     }
// });
// const prevBtn =document.getElementById('prev-btn');
// let imageCounter = 0;
// prevBtn.addEventListener('click', ()=>{
//     const marginRemove = document.querySelector('.reptile');
//     marginRemove.style.marginLeft = "0";
//     if(imageCounter > 0 && imageCounter < reptilesImagesArr.length-1){
//         const lizRepImg = document.querySelector('.reptile');
//         lizRepImg.setAttribute('src', reptilesImagesArr[reptilesImagesArr.length-1-imageCounter]);
//         reptileTitles.textContent = reptilesTitle[reptilesImagesArr.length-1-imageCounter];
//         reptileDescription.textContent = reptilesDesc[reptilesImagesArr.length-1-imageCounter];
//         imageCounter++;
    
//         console.log(imageCounter)
//     } 
//     else if(imageCounter === 0 || imageCounter === reptilesImagesArr.length-1){
//         if (imageCounter===0){
//         imageCounter = 0
//         const lizRepImg = document.querySelector('.reptile');
//         lizRepImg.setAttribute('src', reptilesImagesArr[reptilesImagesArr.length-1]);  
//         reptileTitles.textContent = reptilesTitle[reptilesImagesArr.length-1];
//         reptileDescription.textContent = reptilesDesc[reptilesImagesArr.length-1];
        
//         console.log(imageCounter) 
//         imageCounter = reptilesImagesArr.length-1;  
//         console.log(imageCounter);
//         }else if(imageCounter === reptilesImagesArr.length-1){
//         imageCounter = 0
//         const lizRepImg = document.querySelector('.reptile');
//         lizRepImg.setAttribute('src', reptilesImagesArr[imageCounter]); 
//         reptileTitles.textContent = reptilesTitle[imageCounter];
//         reptileDescription.textContent = reptilesDesc[imageCounter]; 
//         console.log(imageCounter) 
//         imageCounter++;  
//         console.log(imageCounter);
//             }
//     } 
// })
// const nextBtn = document.getElementById('next-btn');
// nextBtn.addEventListener('click',()=>{
//     const marginRemove = document.querySelector('.reptile');
//     marginRemove.style.marginLeft = "0";
//     if(imageCounter<reptilesImagesArr.length-1){
//         const lizRepImg = document.querySelector('.reptile');
//         lizRepImg.setAttribute('src', reptilesImagesArr[imageCounter+1]);
//         reptileTitles.textContent = reptilesTitle[imageCounter+1];
//         reptileDescription.textContent = reptilesDesc[imageCounter+1];      
//         imageCounter++;
//     }else{
//         imageCounter = 0;
//         const lizRepImg = document.querySelector('.reptile');
//         lizRepImg.setAttribute('src', reptilesImagesArr[imageCounter]);
//         reptileTitles.textContent = reptilesTitle[imageCounter];
//         reptileDescription.textContent = reptilesDesc[imageCounter];
//     }
// })

// const exitPage = document.querySelector('.information-page');
// const exitInfoPage = document.querySelector('.exit-information-btn');
// exitInfoPage.addEventListener('click',()=>{
    
//     exitPage.classList.remove('informatin-page-move-in');
//     exitPage.classList.add('information-page-move-out');
    
//     console.log('exit')
//    moveInClass();
// })

// const moveInClass = ()=>{
//     exitPage.classList.replace('information-page-move-in','information-page-move-out')
// }

// id of turtle 0
// id id of second one 1
// get the id and place it in a variable (var imageId = theId)
// information-image-div.append(./path/ image-array[imageId])




// // On click of an image check
// if(exitPage.classList.contains('information-page-move-out')) {
//     exitPage.classList.remove('information-page-move-out');
//     exitPage.classList.add('information-page-move-in')
// } else {
//     exitPage.classList.add('information-page-move-in');
// }


// $(document).on('hover','.reptile',(e)=>{
//         console.log(e.target.getAttribute('data-reptile'))      
//         let reptile = e.target.getAttribute('data-reptile');
//         if (reptile==="lizard0"){
//             let reptile0 = document.querySelector('.reptile0');
//             reptileTitles.textContent = reptilesTitle[0];
//             reptileDescription.textContent = reptilesDesc[0];
//             titleAndDesc.appendChild(reptileTitles);
//             titleAndDesc.appendChild(reptileDescription);
//             reptile0.appendChild(titleAndDesc);
//             console.log(reptile0)
            
//         }else if (reptile==="lizard1"){
//             let reptile1 = document.querySelector('.reptile1');
//             reptileTitles.textContent = reptilesTitle[1];
//             reptileDescription.textContent = reptilesDesc[1];
//             titleAndDesc.appendChild(reptileTitles);
//             titleAndDesc.appendChild(reptileDescription);
//             reptile1.appendChild(titleAndDesc);
//             console.log(reptile1)
//         }else if (reptile==="lizard2"){
//             let reptile2 = document.querySelector('.reptile2');
//             reptileTitles.textContent = reptilesTitle[2];
//             reptileDescription.textContent = reptilesDesc[2];
//             titleAndDesc.appendChild(reptileTitles);
//             titleAndDesc.appendChild(reptileDescription);
//             reptile2.appendChild(titleAndDesc);
//             console.log(reptile2)
//             console.log('2')
//         }else if (reptile==="lizard3"){
//             let reptile3 = document.querySelector('.reptile3');
//             reptileTitles.textContent = reptilesTitle[3];
//             reptileDescription.textContent = reptilesDesc[3];
//             titleAndDesc.appendChild(reptileTitles);
//             titleAndDesc.appendChild(reptileDescription);
//             reptile3.appendChild(titleAndDesc);
//             console.log(reptile3)
//             console.log('3')
//         }else if (reptile==="lizard4"){
//             let reptile4 = document.querySelector('.reptile0');
//             reptileTitles.textContent = reptilesTitle[4];
//             reptileDescription.textContent = reptilesDesc[4];
//             titleAndDesc.appendChild(reptileTitles);
//             titleAndDesc.appendChild(reptileDescription);
//             reptile4.appendChild(titleAndDesc);
//             console.log(reptile4)
//             console.log('4')
//         }
        
        
//     },
//     function(){
//         titleAndDesc.innerHTML = "";

//     });


