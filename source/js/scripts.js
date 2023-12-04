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

if (document.querySelector('.slider') !==null) {
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
}

// MODAL-WINDOW

if (document.querySelector('.modal') !==null) {
  const orderModal = document.querySelector('.modal');

  if (document.querySelector('.weekly-product__order-link') !==null) {
    const indexOrderLink = document.querySelector('.weekly-product__order-link');

    indexOrderLink.addEventListener('click', (evt) => {
      evt.preventDefault();
      orderModal.classList.add('modal--show');
    });
  }

  if (document.querySelectorAll('.products__order-link') !==null) {
    const catalogOrderLinks = document.querySelectorAll('.products__order-link');

    for (let i = 0; i < catalogOrderLinks.length; i++) {
      catalogOrderLinks[i].addEventListener('click', (evt) => {
        evt.preventDefault();
        orderModal.classList.add('modal--show');
      });
    }
  }

  if (document.querySelector('.manufacturing__link') !==null) {
    const catalogOrderAdditionalLink = document.querySelector('.manufacturing__link');

    catalogOrderAdditionalLink.addEventListener('click', (evt) => {
      evt.preventDefault();
      orderModal.classList.add('modal--show');
    });
  }

  orderModal.addEventListener('click', (evt) => {
    if (!evt.target.closest('.modal__order-message')) {
      orderModal.classList.remove('modal--show');
    }
  });

  window.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      if (orderModal.classList.contains('modal--show')) {
        evt.preventDefault();
        orderModal.classList.remove('modal--show');
      }
    }
  });
}
