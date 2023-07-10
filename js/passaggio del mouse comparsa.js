// Assicurati di avere incluso Font Awesome nella tua pagina

// Eseguire il codice quando il documento è pronto
document.addEventListener("DOMContentLoaded", function() {
  // Trova l'elemento dell'immagine e l'elemento dei social icons
  var imageContainer = document.querySelector(".image-container");
  var socialIcons = document.querySelector(".social-icons");

  // Aggiungi un gestore di eventi per il passaggio del mouse sull'immagine
  imageContainer.addEventListener("mouseover", function() {
    socialIcons.style.opacity = "1";
  });

  // Aggiungi un gestore di eventi per l'uscita del mouse dall'immagine
  imageContainer.addEventListener("mouseout", function() {
    socialIcons.style.opacity = "0";
  });
});
