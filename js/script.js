


// script.js


   function toggleDropdownButtons(element) {
    var dropdownButtons = element.nextElementSibling;
    dropdownButtons.classList.toggle("show");
  }
  
  function openCart() {
    window.location.href = "url_del_carrello";
  }
  
  function openLogin() {
    window.location.href = "url_pagina_di_login";
  }

  
  var video = document.getElementById("tm-video");
var videoControlButton = document.getElementById("video-control");

function toggleVideo() {
  if (video.paused) {
    video.play();
    videoControlButton.textContent = "STOP";
  } else {
    video.pause();
    videoControlButton.textContent = "START";
  }
}


<script async src="https://js.stripe.com/v3/buy-button.js"></script>

<stripe-buy-button
  buy-button-id="buy_btn_1NDI8EG8q4k4UTHbs30QuDhV"
  publishable-key="pk_test_51N96fFG8q4k4UTHbwkSZuZaRvLbG2EBif4VF6BXTeQ77t8vuAlvGajCagIWkh2ddSqpwSxL8SawE4d1j3HHvTAF500anF2pfNH"
  onclick="openLinkInNewTab('https://billing.stripe.com/p/login/test_5kAbIY6pCdlo2LmbII')"
>
</stripe-buy-button>

<script>
function openLinkInNewTab(url) {
  window.open(url, '_blank');
}
</script>

31/05/2023






 // Dati dei prodotti
var products = [
  {
    title: "WIZARDS",
    description: "Baalzamon Hissar Xul\nUfeidum Faiman Afthag\nFaiman Afthag",
    image: "images/STREGONE1.png"
  },
  // Aggiungi gli altri prodotti qui...
];

// Seleziona il contenitore dei lavoratori
var contenitoreWorkers = document.getElementById("contenitore-workers");

// Funzione per creare un elemento prodotto
function createProductElement(product) {
  var productElement = document.createElement("div");
  productElement.classList.add("product-item");

  var titleElement = document.createElement("h2");
  titleElement.innerHTML = product.title;

  var imageElement = document.createElement("img");
  imageElement.src = product.image;
  imageElement.alt = "Immagine prodotto";

  var descriptionElement = document.createElement("p");
  descriptionElement.innerHTML = product.description;

  var buttonElement = document.createElement("button");
  buttonElement.innerHTML = "Buy Now";

  productElement.appendChild(titleElement);
  productElement.appendChild(imageElement);
  productElement.appendChild(descriptionElement);
  productElement.appendChild(buttonElement);

  return productElement;
}

// Aggiungi i prodotti al contenitore dei lavoratori
for (var i = 0; i < products.length; i++) {
  var product = products[i];
  var productElement = createProductElement(product);
  contenitoreWorkers.appendChild(productElement);
}

 

 
document.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById('background-music');
  var audioControl = document.getElementById('audio-control');

  audioControl.addEventListener('click', function() {
    if (audio.paused) {
      audio.play();
      audioControl.textContent = 'Interrompi';
    } else {
      audio.pause();
      audioControl.textContent = 'Avvia';
    }
  });
});





         

  
  
  