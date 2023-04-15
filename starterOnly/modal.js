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
const closeBtn = document.querySelector(".btn-close");
const myForm = document.getElementById("myForm");

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
const nameErrorMsgContent = "Veuillez entrer entre 2 et 32 caractères (lettres, espaces et tirets uniquement)";
const lastNameErrorMsg = document.getElementById("lastNameErrorMsg");
const birthdateErrorMsg = document.getElementById("birthdateErrorMsg");
const birthdateErrorMsgContent = "Veuillez entrer une date de naissance valide.";
const emailErrorMsg = document.getElementById("emailErrorMsg");
const emailErrorMsgContent = "Veuillez entrer une date de naissance valide.";
const quantityErrorMsg = document.getElementById("quantityErrorMsg");
const quantityErrorMsgContent = "Veuillez entrer un nombre valide (entre 0 et 99).";
const locationErrorMsg = document.getElementById("locationErrorMsg");
const locationErrorMsgContent = "Veuillez sélectionner une ville.";
const termsOfUseErrorMsg = document.getElementById("termsOfUseErrorMsg");
const termsOfUseErrorMsgContent = "Veuillez accepter les conditions d'utilisation.";
const errorData = document.querySelectorAll("formData");



// RegEx 
const regExName = new RegExp(/^(?=.{2,32}$)[a-zA-ZÀ-ÿ]+(?:[ -][a-zA-ZÀ-ÿ]+)*$/);
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
  modalbg.addEventListener("animationend", () => {
    modalbg.style.display = "none";
    // On supprime la classe rajoutée, pour que l'animation de fermeture ne se déclenche pas
    // si on souhaite ouvrir de nouveau la modale
    modalbg.classList.remove("content-off");
  }, {
    once: true
  });

  /* Si le formulaire est caché (le formulaire se cache pour laisser place au message de confirmation, voir
     la fonction formValidate() plus bas), le bouton de fermeture de modale va réinitialiser les input du formulaire
     et le faire réapparaitre. On ajoute un setTimeout pour que le formulaire ne réapparaisse pas pendant l'animation
     de fermeture de la modale */
  if (myForm.classList.contains("hidden")) { 
    setTimeout(() => {
      myForm.classList.remove("hidden");
      successForm.classList.add("hidden");
      myForm.reset();
    }, 800);
  }
}

/* Fonction pour la validation des différents champs du formulaire. La fonction prend 4 paramètres différents :
  - field, pour le champ à valider (nom, prénom, etc)
  - regex, la fonction pour valider le champ avec les regex
  - errorMsg, qui indique où afficher le message d'erreur
  - errorMsgContent, qui indiquera quoi afficher comme message d'erreur */
function fieldValidate(field, regex, errorMsg, errorMsgContent) {
  if (regex.test(field.value)) {
    // Si le champ testé est valide, il n'y a pas de message
    errorMsg.textContent = "";
    field.style.border = "";
  } else {
    // Si le champ testé n'est pas valide, on affiche un message d'erreur
    errorMsg.textContent = errorMsgContent;
    field.style.border = "#fe142f 2px solid";
    isFormValid = false;
  }
}

//Validation du champ du prénom
inputFirstName.addEventListener("change", () => {
  fieldValidate(inputFirstName, regExName, firstNameErrorMsg, nameErrorMsgContent);
});
//Validation du champ du nom
inputLastName.addEventListener("change", () => {
  fieldValidate(inputLastName, regExName, lastNameErrorMsg, nameErrorMsgContent);
});
  //Validation du champ de l'adresse email
inputEmail.addEventListener("change", () => {
  fieldValidate(inputEmail, regExMail, emailErrorMsg, emailErrorMsgContent);
});
//Validation du champ de la date de naissance
inputBirthdate.addEventListener("change", () => {
  fieldValidate(inputBirthdate, regExBirthdate, birthdateErrorMsg, birthdateErrorMsgContent);
});
//Validation du champ de la quantité d'évènements déjà visités
inputQuantity.addEventListener("change", () => {
  fieldValidate(inputQuantity, regExQuantity, quantityErrorMsg, quantityErrorMsgContent);
});

//Fonction pour valider le formulaire
function formValidate(event) {
  event.preventDefault();

  let isFormValid = true;

  //Validation du champ du prénom
  fieldValidate(inputFirstName, regExName, firstNameErrorMsg, nameErrorMsgContent);
  //Validation du champ du nom
  fieldValidate(inputLastName, regExName, lastNameErrorMsg, nameErrorMsgContent);
  //Validation du champ de l'adresse email
  fieldValidate(inputEmail, regExMail, emailErrorMsg, emailErrorMsgContent);
  //Validation du champ de la date de naissance
  fieldValidate(inputBirthdate, regExBirthdate, birthdateErrorMsg, birthdateErrorMsgContent);
  //Validation du champ de la quantité d'évènements déjà visités
  fieldValidate(inputQuantity, regExQuantity, quantityErrorMsg, quantityErrorMsgContent);


  //Validation de la sélection de la ville
  let radioCheck = 0;
  for (let i = 0; i < locationRadio.length; i++) {
    if (locationRadio[i].checked) {
      radioCheck++;
    }
  }
  const isRadioChecked = radioCheck > 0;
  if (isRadioChecked) {
    locationErrorMsg.textContent = "";
  } else {
    locationErrorMsg.textContent = locationErrorMsgContent;
    isFormValid = false;
  }

  //Validation de validation des conditions d'utilisation
  const isCheckboxValid = termsOfUseCheckbox.checked;
  if (isCheckboxValid) {
    termsOfUseErrorMsg.textContent = "";
  } else {
    termsOfUseErrorMsg.textContent = termsOfUseErrorMsgContent;
    isFormValid = false;
  }

  //Si tout est valide, on cache le formulaire
  if (isFormValid) {
    myForm.classList.add("hidden");
    successForm.classList.remove("hidden");
  }
};

//On écoute le submit du formulaire, auquel on applique la fonction formValidate
myForm.addEventListener("submit", formValidate);

//On écoute l'évènement clic sur le bouton "Fermer" de la modale (qui s'affiche si le formulaire est bien envoyé)
closeBtn.addEventListener("click", () => {
  closeModal()
})


