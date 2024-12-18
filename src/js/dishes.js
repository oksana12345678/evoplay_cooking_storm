import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperContainer = document.querySelector('.swiper.swiper-one');
export const BUTTON_NEXT = document.querySelector('.button-next-svg');
export const BUTTON_PREV = document.querySelector('.button-prev');

export const swiper = new Swiper(swiperContainer, {
  modules: [Navigation, Keyboard],
  navigation: {
    nextEl: BUTTON_NEXT,
    prevEl: BUTTON_PREV,
  },

  direction: 'horizontal',
  autoHeight: false,
  autoWidth: false,
  watchOverflow: false,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 60,
    },
  },
});

swiper.update();

const updateButtonState = (button, disabled) => {
  if (disabled) {
    button.style.opacity = '0.5';
    button.style.cursor = 'not-allowed';
  } else {
    button.style.opacity = '1';
    button.style.cursor = 'pointer';
  }
};

const nextObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.attributeName === 'class') {
      const disabled = BUTTON_NEXT.classList.contains('swiper-button-disabled');
      updateButtonState(BUTTON_NEXT, disabled);
    }
  });
});

nextObserver.observe(BUTTON_NEXT, { attributes: true });

const prevObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.attributeName === 'class') {
      const disabled = BUTTON_PREV.classList.contains('swiper-button-disabled');
      updateButtonState(BUTTON_PREV, disabled);
    }
  });
});

prevObserver.observe(BUTTON_PREV, { attributes: true });

const gallery = document.querySelector('.swiper-one');
const about = document.querySelector('.about-main-content');
const faq = document.querySelector('.faq-list');
const howToPlay = document.querySelector('.swiper-box');
const features = document.querySelector('.features-list');
const hero = document.querySelector('.footer');

const handleAnimation = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');

      entry.target.addEventListener(
        'animationend',
        () => {
          entry.target.classList.remove('animate');
        },
        { once: true }
      );
    }
  });
};

const observer = new IntersectionObserver(handleAnimation);

observer.observe(gallery);
observer.observe(about);
observer.observe(faq);
observer.observe(howToPlay);
observer.observe(features);
observer.observe(hero);
