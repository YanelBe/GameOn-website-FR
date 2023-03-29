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


// Variables pour les messages d'erreur
const firstNameErrorMsg = document.getElementById("firstNameErrorMsg");
const lastNameErrorMsg = document.getElementById("lastNameErrorMsg");
const errorData = document.querySelectorAll("formData");



// RegEx 
const regExName = new RegExp(/^[a-zA-Zà-üÀ-Ü]{2,32}$/);
const regExMail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");

// Fonctions pour appliquer des conditions de validation du formulaire à l'aide des RegEx

// Fonction pour vérifier le champ du prénom
function firstNameTest() {
  inputFirstName.addEventListener("change", () => {
      if (regExName.test(first.value)) {
          firstNameErrorMsg.textContent = "";
      } else {
          firstNameErrorMsg.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
      }
  });
}
firstNameTest();

// Fonction pour vérifier le champ du nom
function lastNameTest() {
  inputLastName.addEventListener("change", () => {
      if (regExName.test(last.value)) {
          lastNameErrorMsg.textContent = "";
      } else {
          lastNameErrorMsg.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
      }
  });
}
lastNameTest();





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
  // On rajoute une classe content-off pour activer l'animation de fermeture de modale
  modalbg.classList.add("content-off");
  modalbg.addEventListener("animationend", function() {
    modalbg.style.display = "none";
    modalbg.classList.remove("content-off");
  }, {
    once: true
  });
}

