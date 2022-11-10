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

  //Check firstName

  if (firstNameInput.value.length > 1) {
    e.preventDefault()
  } else {
    e.preventDefault()
  }

  //Check lastName

  if (lastNameInput.value.length > 1) {
    e.preventDefault()
  } else {
    e.preventDefault()
  }

  //Check email

  if (regExpEmail.test(emailInput.value)) {
    e.preventDefault()
  } else {
    e.preventDefault()
  }

  // Check birthdate

  if (birthdateInput.value) {
    e.preventDefault()
  } else {
    e.preventDefault()
  }


  //Check quantity

  const testQuantity = regExpNumber.test(quantityInput.value)
  if (testQuantity) {
    e.preventDefault()
  } else {
    e.preventDefault()
  }

  //Check location

  if (locationInput1.checked || locationInput2.checked || locationInput3.checked || locationInput4.checked || locationInput5.checked || locationInput6.checked) {
    e.preventDefault()
  } else {
    e.preventDefault()
  }

  // Check conditons

  if (conditions.checked) {
    e.preventDefault()
  } else {
    e.preventDefault()
  }
}
)



