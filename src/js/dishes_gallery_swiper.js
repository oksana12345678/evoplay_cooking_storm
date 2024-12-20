import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css/navigation';

const createSwiper = (
  containerSelector,
  nextSelector,
  prevSelector,
  options = {}
) => {
  const swiperContainer = document.querySelector(containerSelector);
  const BUTTON_NEXT = document.querySelector(nextSelector);
  const BUTTON_PREV = document.querySelector(prevSelector);

  const defaultOptions = {
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
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  };

  const swiper = new Swiper(swiperContainer, { ...defaultOptions, ...options });

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

  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.attributeName === 'class') {
        const isDisabled = mutation.target.classList.contains(
          'swiper-button-disabled'
        );
        if (mutation.target === BUTTON_NEXT) {
          updateButtonState(BUTTON_NEXT, isDisabled);
        } else if (mutation.target === BUTTON_PREV) {
          updateButtonState(BUTTON_PREV, isDisabled);
        }
      }
    });
  });

  observer.observe(BUTTON_NEXT, { attributes: true });
  observer.observe(BUTTON_PREV, { attributes: true });

  return swiper;
};

const swiperOne = createSwiper(
  '.swiper.swiper-one',
  '.button-next-svg',
  '.button-prev-svg',
  { loop: true }
);

const swiperTwo = createSwiper(
  '.swiper.swiper-box',
  '.button-nex',
  '.button-pre',
  { on: { reachEnd: () => setTimeout(() => swiperTwo.slideTo(0, 1000), 1000) } }
);
