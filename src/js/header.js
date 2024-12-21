const btnOpen = document.querySelector('.btn-burger');
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
  const isModalOpen = modal.classList.contains('is-open'); // Перевіряємо, чи модалка відкрита

  if (isModalOpen) {
    // Якщо модалка відкрита, закриваємо її
    modal.classList.remove('is-open');
    burgerMenu.classList.remove('is-open');
    document.body.style.overflow = ''; // Відновлюємо прокручування
  } else {
    // Якщо модалка закрита, відкриваємо її
    modal.classList.add('is-open');
    burgerMenu.classList.add('is-open');
    document.body.style.overflow = 'hidden'; // Відключаємо прокручування
  }
});

modalContent.addEventListener('click', e => {
  e.stopPropagation();
});

modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.remove('is-open');
    burgerMenu.classList.remove('is-open');
    document.body.style.overflow = '';
  }
});

navigation.forEach(item => {
  item.addEventListener('click', () => {
    modal.classList.remove('is-open');
    burgerMenu.classList.remove('is-open');
    document.body.style.overflow = '';
  });
});
