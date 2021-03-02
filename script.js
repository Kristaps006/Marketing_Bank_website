'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////////////////////

//Modal window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////////////////
//BUTTON SCROLLING

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect(); //  getBoundingClientRect gives you coordinates
  section1.scrollIntoView({ behavior: 'smooth' });
});

//////////////////////////
//PAGE NAVIGATION

/* document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('link');

    const id = this.getAttribute('href');
    console.log('id');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});
 */

// we will use event delegation to attach to parent instead of
//  1. Add event listener to common parent element
// 2. Determine what eelemt originated the event from and

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  //Matching Strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

////TAPPED COMPONENTS////////////////

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  //Guard clause
  if (!clicked) return;

  //Active Tab

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // ACTIVATE CONTENT area

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//_______LECTURES _-----------------

//SMOOTH ___ SCROLLLING ---
//bellow is 3 different ways of calculating smooth scrolling

// window.scrollTo(
//   s1coords.left + window.pageXOffset,
//   s1coords.top + window.pageYOffset
// );

/*   window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
 */

///________________ SELECTING ELEMENTS____________________
/* 
console.log(document.documentElement);

console.log(document.head);
console.log(document.body);

document.querySelector('.header'); // selects first header
const allSection = document.querySelectorAll('.section'); // Selects all

console.log(allSection);

document.getElementById('section--1'); // you dont need # sign in

const allButtons = document.getElementsByTagName('button'); 
console.log(allButtons);

document.getElementsByClassName('btn') // also dont need selector . 
 */

//--------------------------Creating and INserting ELEMENTS

//.insertAdjacentHTML  -- need to look up
/* 
const header = document.querySelector('.header');

const message = document.createElement('div');
message.classList.add('cookie-message');
//message.textContent = ' We use cookies for analytics'
message.innerHTML =
  ' We use cookies for analytics <button class="btn btn--close-cookie">Got it!</button>';

header.prepend(message); // prepend adds element as a forst child
//header.append(message); // append adds element at the end
//header.append(message.cloneNode(true));  //  cloneNode means we copy the element

// header.before(message);  // inserts before header
// header.after(message);   // inserts after
 */
//____________DELETE ELEMENTS

/* document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  }); */

//____________________________________STYLES ATTRIBUTES AND CLASSSES ____________________________________

/* document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    //message.remove();
  });
// /////////////////
// Styles are set into html as inline styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(getComputedStyle(message)); // this the way to get all style elements - computed styles- alos those that are by default

console.log(getComputedStyle(message).color);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'olive'); // This is the way to change properties
 */
//ATTRIBUTES________________--
/* 
const logo = document.querySelector('.nav__logo'); // SELECTING attributes
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'beautiful minimalsit logo';

//Non-standart way of selecting

console.log(logo.getAttribute('designer'));

logo.setAttribute('company', 'Bankist'); // set new attribute
console.log(logo.getAttribute('src')); // shows the src as ti is in html file

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// DATA ATTRIBUTES________________ SET

console.log(logo.dataset.versionNumber); // It is important to use Camel case as

//  CLASSSES ________________________

// you can add and remove mutliple classses

logo.classList.add('c', 'j');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

// Dont use it , it will overwrite everything
logo.clasName = 'jonas';
 */

//___________EVENTS EVENT HANDLERS ________________________

/* const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great u r reading heading ');
};

h1.removeEventListener('mouseenter', alertH1); // you can remove event listener , but need ti be in a function

h1.addEventListener('mouseenter', function (e) {
  alert('addEventListener: Great u r reading heading ');
});

h1.onmouseenter = function (e) {
  alert('onmouseenter: Great u r reading heading ');
};

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
 */

//___________EVENTS BUBLING & PROPAGATION________________________
/* 
// rbg(255, 255, 255)

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)},${randomInt(0, 255)})`;

// e.target - where did the click happen
// e.current target. it shows where did excactly did event happen
// this keywords is also current target

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();

  console.log('LINK', e.target, e.currentTarget);

  // ---stopPropagation
  // e.stopPropagation();   // IT stops the bubling and it does not effect parent elements
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();

  console.log('Container', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();

  console.log('NAV', e.target, e.currentTarget);
}, false);  //  set false to true  and event will not listen to bubbling. It will be first to get event handling. 



 */

//________________________DOM TRAVERSING ______________________________
/* 
const h1 = document.querySelector('h1');

// GOing downwards: childs of h1

console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children); // gives live Html collection

h1.firstElementChild.style.color = 'red';
h1.lastElementChild.style.color = 'blue';

// Going Upwards - selecting parents

console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';

//h1.closest('.h1').style.background = 'var(--gradient-primary)'; // it will find itself

// Selectin siblings :  going sideways h1

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  console.log(el);
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
 */
