'use strict';
/////////////////////////
// SELECTING ELEMENTS //
///////////////////////

// Navegation mouseover element
const nav = document.querySelector('.header-nav');

// Smoth Scrolling
const aboutMeBtn = document.querySelector('.scroll-btn');
const section1 = document.querySelector('#section1');

// Hamburger elements
const hamburgerBtn = document.querySelector('.hamburger-btn');
const headerNav = document.querySelector('.header-nav');

//////////////////////////////////////
// FUNCTIONS TO DO NOT REPEAT CODE //
////////////////////////////////////

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
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

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
