"use  strict"

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

/*-------------
    CONFIG
---------------*/
//salvo in una variabile un valore di indice 0 
let currentImageIndex= 0;
//SALVO IN UNA VARIABILE IL CONTENITORE DI IMG E TESTO
const currentImageContainer= document.querySelector(".items-img");

//SALVO IN UNA VARIBAILE IL CONTENITORE DELLE THUMBS
const thumbsContainer= document.querySelector('.items-preview')

/*-------------
    CONFIG
---------------*/


/*-------------
    MAIN
---------------*/

//CLONAZIONE DEL TEMPLATE IMAGE
const templateCurrentImage= document.getElementById('currentimage').content.cloneNode(true);
// RICAVO DAL TEMPLATE  L'IMG ATTRAVERSO QUERY SELECTOR E ISERISCO L'SRC DALL ARRAY PER COMPLIARE L'HTML DA JS
templateCurrentImage.querySelector('img').src= images[currentImageIndex].image;
//RICAVO DAL TEMPLATE IL TITOLO E INIETTO CON INNER HTML IL TESTO DALL' ARRAY
templateCurrentImage.querySelector('.title h5').innerHtml= images[currentImageIndex].title;
//RICAVO DAL TEMPLATE IL PARAGRAFO E INIETTO CON INNERHTML IL TESTO DALL' ARRAY
templateCurrentImage.querySelector('.title p').innerHtml= images[currentImageIndex].text;
//APPENDO ILTEMPLATE(templateCurrentImage) NEL CONTENITORE(currentImageContainer)
currentImageContainer.append(templateCurrentImage);


//  THUMBS 
// CREO LE THUMBS ATTRAVERSO IL CICLO FOREACH ( TTENZIONE: NEL CICLO FOREACH L'ELEM EQUIVALE ALL'OGGETTO DELL ARRAY)
images.forEach((elm, index) => {
    //CICLO SULLE THUMBS E CLONO IL TEMPLATE  
    const templateThumb= document.getElementById('thumb').content.cloneNode(true);

    //SE L'ELEMENTO SU CUI STO CICLANDO HA L'INDICE ==== CURRENTIMAGEINDEX APPLICO LA CLASSI ACTIVE
    if(index === currentImageIndex){
        templateThumb.querySelector('.item-pre-img').classList.add('active');
    }

    // RICAVO DAL TEMPLATE  L'IMG ATTRAVERSO QUERY SELECTOR E ISERISCO L'SRC DALL ARRAY PER COMPLIARE L'HTML DA JS
    templateThumb.querySelector('img').src= elm.image;
    //APPENDO IL TEMPLATETHUMB NEL CONTENITORE THUMBCONTAINER
    thumbsContainer.append(templateThumb); 
});


// SELEZIONO TUTTE LE THUMBS
const thumbs= document.querySelectorAll('.item-pre-img');
console.log(thumbs);

// NEXT SLIDE
const btnNextSlide= document.querySelector('.btn-under')

btnNextSlide.addEventListener('click', function(){
    // RIMUOVO LA CLASSE ACTIVE DALLA THUMB ATTIVA
    thumbs[currentImageIndex].classList.remove('active');

    // INCREMENTO IL currentImageIndex
    if(currentImageIndex < images.length-1){
        currentImageIndex++;
    }else{
        currentImageIndex=0;
    }
    
    // AGGIUNGO LA CLASSE ACTIVE THUMB SUCCESIVA
    thumbs[currentImageIndex].classList.add('active');
    // MODIFICO IMMAGINE E TESTO DELLA CURRENT IMAGE QUELLA GRANDE A SINISTRA
    currentImageContainer.querySelector('img').src= images[currentImageIndex].image;
    currentImageContainer.querySelector('.title h5').innerHtml= images[currentImageIndex].title;
    currentImageContainer.querySelector('.title p').innerHtml= images[currentImageIndex].text;

})

//PREV SLIDE

const btnPrevSlide= document.querySelector('.btn-over')

btnNextSlide.addEventListener('click', function(){
    // RIMUOVO LA CLASSE ACTIVE DALLA THUMB ATTIVA
    thumbs[currentImageIndex].classList.remove('active');

    // INCREMENTO IL currentImageIndex
    if(currentImageIndex >  0){
        currentImageIndex--;
    }else{
        currentImageIndex = images.length-1;
    }
    
    // AGGIUNGO LA CLASSE ACTIVE THUMB SUCCESIVA
    thumbs[currentImageIndex].classList.add('active');
    // MODIFICO IMMAGINE E TESTO DELLA CURRENT IMAGE QUELLA GRANDE A SINISTRA
    currentImageContainer.querySelector('img').src= images[currentImageIndex].image;
    currentImageContainer.querySelector('.title h5').innerHtml= images[currentImageIndex].title;
    currentImageContainer.querySelector('.title p').innerHtml= images[currentImageIndex].text;

})