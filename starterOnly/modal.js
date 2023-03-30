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
const submitBtn = document.querySelector(".btn-submit");
const formDisplay = document.getElementsByName("reserve");

// Variable du bouton de fermeture de modale
const modalBtnClose = document.querySelector(".close");

// Variables pour la sélection des éléments du formulaire
const inputFirstName = document.getElementById("first");
const inputLastName = document.getElementById("last");
const inputEmail = document.getElementById("email");
const inputBirthdate = document.getElementById("birthdate");
const inputQuantity = document.getElementById("quantity");
const locationRadio = document.getElementsByName("location");
const termsOfUseCheckbox = document.getElementById("checkbox1");
const successForm = document.getElementById("success");


// Variables pour les messages d'erreur
const firstNameErrorMsg = document.getElementById("firstNameErrorMsg");
const lastNameErrorMsg = document.getElementById("lastNameErrorMsg");
const emailErrorMsg = document.getElementById("emailErrorMsg");
const quantityErrorMsg = document.getElementById("quantityErrorMsg");
const locationErrorMsg = document.getElementById("locationErrorMsg");
const termsOfUseErrorMsg = document.getElementById("termsOfUseErrorMsg");
const errorData = document.querySelectorAll("formData");



// RegEx 
const regExName = new RegExp(/^[a-zA-Zà-üÀ-Ü]{2,32}$/);
const regExMail = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const regExBirthdate = new RegExp(/^((19[0-9]+[0-9]|20[0-1]+[0-9])-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])|(0?[1-9]|[12]\d|3[01])[/](0?[1-9]|1[0-2])[/](19[3-9]+[0-9]|200[0-6]))$/);
const regExQuantity = new RegExp(/^([0-9]){1,2}$/);

/* Ouverture & Fermeture de la Modale */

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
  // On rajoute une classe content-off pour activer l'animation css de fermeture de modale
  modalbg.classList.add("content-off");
  modalbg.addEventListener("animationend", function() {
    modalbg.style.display = "none";
    // On supprime la classe rajoutée, pour que l'animation de fermeture ne se déclenche pas
    // si on souhaite ouvrir de nouveau la modale
    modalbg.classList.remove("content-off");
  }, {
    once: true
  });
}


/* Fonctions pour appliquer des conditions de validation du formulaire à l'aide des RegEx */

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

// Fonction pour vérifier le champ de l'adresse email
function emailTest() {
  inputEmail.addEventListener("change", () => {
    if (regExMail.test(email.value)) {
      emailErrorMsg.textContent = "";
    } else {
      emailErrorMsg.textContent = "Veuillez entrer une adresse email valide.";
    }
  });
}
emailTest();

// Fonction pour vérifier le champ de la date de naissance
function birthdateTest() {
  inputBirthdate.addEventListener("change", () => {
    if (regExBirthdate.test(birthdate.value)) {
      birthdateErrorMsg.textContent = "";
    } else {
      birthdateErrorMsg.textContent = "Veuillez entrer une date de naissance valide.";
    }
  });
}
birthdateTest();

// Fonction pour vérifier si le nombre de tournois est indiqué
function quantityTest() {
  inputQuantity.addEventListener("change", () => {
    if (regExQuantity.test(quantity.value)) {
      quantityErrorMsg.textContent = "";
    } else {
      quantityErrorMsg.textContent = "Veuillez entrer un nombre valide.";
    }
  });
}
quantityTest();

// Fonction pour vérifier si une ville est bien sélectionnée 
function locationTest() {
  // On définit une variable pour définir l'état des cases, à 0 par défaut
  let radioCheck = 0;
  // On définit une variable pour vérifier qu'une case est cochée (supérieur à 0)
  const isRadioChecked = radioCheck > 0;
  
  // Pour toute case cochée, on augmente la quantité de case cochée (limitée à 1)
  for (let i = 0; i < locationRadio.length; i++) {
    if (locationRadio[i].checked) {
      radioCheck++;
    }
  }
  locationRadio.addEventListener("click", () => {
    // Si une case n'est pas cochée, on affiche un message d'erreur
    if (isRadioChecked) {
      locationErrorMsg.textContent = "";
    } else {
      locationErrorMsg.textContent = "Veuillez sélectionner une ville.";
    }
  });
}

//Fonction pour vérifier si la case des conditions d'utilisation est acceptée
function termsOfUseTest() {
  const isCheckboxValid = termsOfUseCheckbox.checked;

  termsOfUseCheckbox.addEventListener("click", () => { 
    if (isCheckboxValid) {
      termsOfUseErrorMsg.textContent = "";
    } else {
      termsOfUseErrorMsg.textContent = "Veuillez accepter les conditions d'utilisation."
    }
  });
}

//Fonction pour valider le formulaire
function validate(event) {
  event.preventDefault();
  submitBtn.addEventListener("submit", () => {

    const isFormValid = firstNameTest() && lastNameTest() && emailTest() && birthdateTest() 
                        && quantityTest() && locationTest() && termsOfUseTest();

    firstNameTest();
    lastNameTest();
    emailTest();
    birthdateTest();
    quantityTest();
    locationTest();
    termsOfUseTest(); 

   if (isFormValid) {
      formDisplay.style.display = "none";
      successForm.style.display = "block";
      successForm.textContent = "Merci ! Votre réservation a été reçue.";
    } 
  });
}

validate();