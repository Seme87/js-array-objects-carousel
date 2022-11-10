"use  strict"

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//SALVO IL CONTAINER HTML IN UNA VARIABILE
const container= document.querySelector(".container");
//CLONO TEMPLATE DA HTML SU JS
const template= document.getElementById("template-item").content.cloneNode(true);
//SELEZIONO IL CONTENITORE DELL'IMMAGINE
const cardImg= template.querySelector(".items-img-card ");
//SELEZIONO IL PULSANTE OVER DA HTML
const btnOver= template.querySelector(".btn-over");
//CREO L'ELEMENTO IMG
const imgHtml= document.createElement("img");
console.log(imgHtml)

console.log(template)

for(let i= 0; i < images.length; i++){
    const imageArray= images[i].image;
   
    
    if(i===0){
        cardImg.classList.add("active")
        imgHtml.src= imageArray;
    }
    
    
   
    cardImg.append(imgHtml)
    
   btnOver.addEventListener("click", function(){
    
   })
    


    container.append(template);
} 