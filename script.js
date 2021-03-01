'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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

//____________DELETE ELEMENTS

/* document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  }); */

//____________________________________STYLES ATTRIBUTES AND CLASSSES ____________________________________

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    //message.remove();
  });

// Styles are set into html as inline styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(getComputedStyle(message)); // this the way to get all style elements - computed styles- alos those that are by default

console.log(getComputedStyle(message).color);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'olive'); // This is the way to change properties

//ATTRIBUTES________________--

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
