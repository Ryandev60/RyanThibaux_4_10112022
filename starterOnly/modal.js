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
// 
const closeSubMenu = document.getElementById('closeSubMenu');
// DOM form elements
const firstNameInput = document.getElementById('first');
const lastNameInput = document.getElementById('last');
const emailInput = document.getElementById('email');
const birthdateInput = document.getElementById('birthdate');
const quantityInput = document.getElementById('quantity');
const locationInput1 = document.getElementById('location1');
const locationInput2 = document.getElementById('location2');
const locationInput3 = document.getElementById('location3');
const locationInput4 = document.getElementById('location4');
const locationInput5 = document.getElementById('location5');
const locationInput6 = document.getElementById('location6');
const conditions = document.getElementById('checkbox1');
const submitForm = document.getElementById('submitForm');

// Err txt

const firstNameErr = "Entrer 2 caractères ou plus pour le champ du prénom."
const lastNameErr = "Entrer 2 caractères ou plus pour le champ du nom."
const emailErr = "Entrer un email correct."
const birthdateErr = "Entrer une date de naissance correct."
const quantityErr = "Entrer un nombre de participation correct."
const locationErr = "Selectionner à quel tournoi vous avez participé cette année."
const conditionsErr = "Accepter les conditions d'utilisation"

// Function show error

const showErr = (e, txtErr, id) => {
  if (!document.getElementById(id)) {
    const createTxtErr = document.createElement("p");
    createTxtErr.classList.add('err-txt');
    createTxtErr.id = id
    e.after(createTxtErr);
    createTxtErr.innerText = txtErr;
  }
}

// Function remove error

const removeErr = (id) => {
  document.getElementById(id) ? document.getElementById(id).remove() : null;
}

//RegExp

const regExpEmail = new RegExp(
  "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$"
)

const regExpNumber = new RegExp(
  "^[0-100]"
)

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Close subscribe menu

closeSubMenu.addEventListener('click', () => {
  modalbg.style.display = "none"
})

//Test input form

submitForm.addEventListener('click', (e) => {

  // Override the form's default behavior

  e.preventDefault()

  //Check firstName

  if (firstNameInput.value.length > 1) {
    removeErr("txtErrFirstName")
  } else {
    showErr(firstNameInput, firstNameErr, "txtErrFirstName")
  }

  //Check lastName

  if (lastNameInput.value.length > 1) {
    removeErr("txtErrLastName")
  } else {
    showErr(lastNameInput, lastNameErr, "txtErrLastName")
  }

  //Check email

  if (regExpEmail.test(emailInput.value)) {
    removeErr("txtErrEmail")
  } else {
    showErr(emailInput, emailErr, "txtErrEmail")
  }

  // Check birthdate

  if (birthdateInput.value) {
    removeErr("txtErrBirthdate")
  } else {
    showErr(birthdateInput, birthdateErr, "txtErrBirthdate")
  }


  //Check quantity

  const testQuantity = regExpNumber.test(quantityInput.value)
  if (testQuantity) {
    removeErr("txtErrQuantity")

  } else {
    showErr(quantityInput, quantityErr, "txtErrQuantity")
  }

  //Check location

  if (locationInput1.checked || locationInput2.checked || locationInput3.checked || locationInput4.checked || locationInput5.checked || locationInput6.checked) {
    removeErr("txtErrLocation")

  } else {
    showErr(lastLocation, locationErr, "txtErrLocation")
  }

  // Check conditons

  if (conditions.checked) {
    removeErr("txtErrConditions")
  } else {
    showErr(checkConditions, conditionsErr, "txtErrConditions")
  }
}
)



