const btnOpen = document.querySelector('.btn-burger');
const btnClose = document.querySelector('.close-btn');
const modal = document.querySelector('.modal-overlay');
const burgerMenu = document.querySelector('.burger-menu');

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1); // Отримуємо id елемента без "#"
      const target = document.getElementById(targetId);

      if (target) {
        // Рахуємо відстань до цілі
        const offset = 90; // Відступ для видимості заголовка
        const targetPosition = target.offsetTop - offset;

        // Плавна прокрутка
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
