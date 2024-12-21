const btnOpen = document.querySelector('.btn-burger');
const btnClose = document.querySelector('.close-btn');
const modal = document.querySelector('.modal-overlay');
const modalContent = document.querySelector('.modal-content');
const burgerMenu = document.querySelector('.burger-menu');
const navigation = document.querySelectorAll('.menu-item-modal');

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        const offset = 90;
        const targetPosition = target.offsetTop - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    });
  });
});

btnOpen.addEventListener('click', () => {
  burgerMenu.classList.toggle('is-open');
  modal.classList.toggle('is-open');
});
modalContent.addEventListener('click', e => {
  e.stopPropagation();
});

modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.remove('is-open');
    burgerMenu.classList.remove('is-open');
  }
});

navigation.forEach(item => {
  item.addEventListener('click', () => {
    modal.classList.remove('is-open');
    burgerMenu.classList.remove('is-open');
  });
});
