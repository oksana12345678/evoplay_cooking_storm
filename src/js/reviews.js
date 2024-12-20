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
};
const swiperOne = createSwiper(
  '.swiper.swiper-one',
  '.button-next-svg',
  '.button-prev-svg',
  { loop: true }
);
