function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// Variable du bouton de fermeture de modale
const modalBtnClose = document.querySelector(".close");

// Variables pour la sélection des éléments du formulaire
const inputFirstName = document.getElementById("first");
const inputLastName = document.getElementById("last");
const inputEmail = document.getElementById("email");
const inputBirthdate = document.getElementById("birthdate");
const inputQuantity = document.getElementById("quantity");
const inputLocation = document.getElementsByName("location");



// RegEx 
const regExName = 




// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// Ecoute de l'event pour fermer la modale
modalBtnClose.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Fonction pour fermer la modale
function closeModal() {
  modalbg.style.display = "none";
}

