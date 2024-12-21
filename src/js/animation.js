document.addEventListener('DOMContentLoaded', function () {
  // Ініціалізація AOS
  AOS.init({
    duration: 1000, // Час анімації
    easing: 'ease-out', // Тип анімації
    once: false, // Якщо true, анімація буде виконана тільки один раз при прокручуванні
    // Якщо true, анімація повторюється при поверненні елемента в область видимості
  });
});
