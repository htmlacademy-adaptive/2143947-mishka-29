// BURGER-MENU

const pageBody = document.querySelector('.page__body');
const navigation = document.querySelector('.main-navigation');
const navigationToggle = navigation.querySelector('.main-navigation__toggle');

pageBody.classList.remove('page__body--no-js');

navigationToggle.addEventListener('click', (evt) => {
  if (navigation.classList.contains('main-navigation--closed')) {
    evt.preventDefault();
    navigation.classList.remove('main-navigation--closed');
  }
  else {
    evt.preventDefault();
    navigation.classList.add('main-navigation--closed');
  }
});

// SLIDER

const slides = document.querySelectorAll('.slider__item');
const buttonPrevious = document.querySelector('.slider__button--previous');
const buttonNext = document.querySelector('.slider__button--next');
let counter = 0;

const clearClasses = () => {
  document.querySelector('.slider__item--current').classList.remove('slider__item--current');
};

buttonPrevious.addEventListener('click', () => {
  clearClasses();
  counter = counter - 1;
  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides[counter].classList.add('slider__item--current');
});

buttonNext.addEventListener('click', () => {
  clearClasses();
  counter = counter + 1;
  if (counter > slides.length - 1) {
    counter = 0;
  }
  slides[counter].classList.add('slider__item--current');
});
