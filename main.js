'use strict';
/////////////////////////
// SELECTING ELEMENTS //
///////////////////////

// Navegation mouseover element
const nav = document.querySelectorAll('.header-nav');

// Revealing on scroll
const allSections = document.querySelectorAll('.section');

// Smoth Scrolling
const aboutMeBtn = document.querySelector('.scroll-btn');
const section1 = document.querySelector('#section1');

// Hamburger elements
const hamburgerBtn = document.querySelector('.hamburger-btn');
const headerNav = document.querySelector('.header-nav');

// Contact me form

const form = document.getElementsByTagName('form')[0];
let userName = document.getElementById('userName');
let email = document.getElementById('mail');
let textArea = document.getElementById('msg');
let submitBTN = document.querySelector('.submit-btn');
const inputs = document.querySelectorAll('.input-control-input');
const output = document.querySelector('.output');

submitBTN.disabled = true;

form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkInput();
});

//////////////////////////////////////
// FUNCTIONS TO DO NOT REPEAT CODE //
////////////////////////////////////

function checkInput() {
  let userNameValid = userName.value.trim();
  let emailValid = email.value.trim();
  let textAreaValid = textArea.value.trim();

  const inputs = document.querySelectorAll('.input-control-input');

  if (userNameValid === '') {
    setErrorFor(userName, 'This field is required');
  } else {
    setSucessFor(userName);
  }
  if (textAreaValid === '') {
    setErrorFor(textArea, 'This field is required');
  } else {
    setSucessFor(textArea);
  }
  if (emailValid === '') {
    setErrorFor(email, 'This field is required');
  } else if (!isEmail(emailValid)) {
  } else {
    setSucessFor(email);
  }
  if (userNameValid !== '' && emailValid !== '' && textAreaValid !== '') {
    inputs.forEach(singleInput => (singleInput.value = ''));
    output.innerHTML = `Thank you ${userNameValid}, your request was successfully submitted`;
    submitBTN.disabled = true;
  } else {
    output.textContent = '';
  }
}
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const error = formControl.querySelector('.error');
  error.style.display = 'block';
  error.innerText = message;
  input.style.border = '2px solid hsl(0, 90%, 57%)';
}

function setSucessFor(input) {
  const formControl = input.parentElement;
  const error = formControl.querySelector('.error');
  error.style.display = 'none';
  input.style.border = '2px solid hsl(167, 36%, 54%)';
}

function isEmail(email) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  );
}

// Btn disable functionality

inputs.forEach(singleInput =>
  singleInput.addEventListener('change', () => {
    if (singleInput.value === '') {
      submitBTN.disabled = true;
    } else {
      submitBTN.disabled = false;
      submitBTN.style.backgroundColor = 'hsl(205, 41%, 21%)';
      submitBTN.style.color = 'hsl(0, 0%, 98%)';
    }
  })
);

// Revealing section

const revealSection = function (entries, oberserver) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section-hidden');
  oberserver.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section-hidden');
});

// opacity hover the nav function.
const handleHover = function (e) {
  if (e.target.classList.contains('nav-link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav-link');
    const logo = link.closest('.nav').querySelector('.logo');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Hamburger function
const toggleClasses = function () {
  hamburgerBtn.classList.toggle('active');
  headerNav.classList.toggle('open');
};

/////////////////////////////
// ADDEVENT FUNCTIONALITIES //
///////////////////////////

// Navegation addEventListener
nav.forEach(el => el.addEventListener('mouseover', handleHover.bind(0.5)));
nav.forEach(el => el.addEventListener('mouseout', handleHover.bind(1)));

// Hamburger addEventListener
hamburgerBtn.addEventListener('click', () => {
  toggleClasses();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && hamburgerBtn.classList.contains('active')) {
    toggleClasses();
  }
});

// Scroll
aboutMeBtn.addEventListener('click', e => {
  e.preventDefault();
  section1.scrollIntoView({ behavior: 'smooth' });
});
