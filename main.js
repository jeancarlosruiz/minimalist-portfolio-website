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

//////////////////////////////////////
// FUNCTIONS TO DO NOT REPEAT CODE //
////////////////////////////////////

// Revealing section

const revealSection = function (entries, oberserver) {
  const [entry] = entries;
  console.log(entry);

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
