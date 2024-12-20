import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css/navigation';

const createSwiper = (containerSelector, nextSelector, prevSelector) => {
  const swiperContainer = document.querySelector(containerSelector);
  const BUTTON_NEXT = document.querySelector(nextSelector);
  const BUTTON_PREV = document.querySelector(prevSelector);

  const swiper = new Swiper(swiperContainer, {
    modules: [Navigation, Keyboard],
    navigation: {
      nextEl: BUTTON_NEXT,
      prevEl: BUTTON_PREV,
    },
    direction: 'horizontal',
    loop: true,
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
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
  });

  swiper.update(); // Оновлення після ініціалізації

  return swiper;
};

// Ініціалізація Swiper для секції відгуків
const swiperOne = createSwiper(
  '.swiper.swiper-one',
  '.button-next-svg',
  '.button-prev-svg'
);
