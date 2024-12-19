const btnOpen = document.querySelector('.btn-burger');
const btnClose = document.querySelector('.close-btn');
const modal = document.querySelector('.modal-overlay');

btnOpen.addEventListener('click', () => {
  modal.classList.add('is-open');
});
