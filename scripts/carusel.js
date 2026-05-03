document.addEventListener('DOMContentLoaded', () => {
const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let counter = 0;
const size = images[0].clientWidth;

// Обработчики клика по кнопкам
nextBtn.addEventListener('click', () => {
if (counter >= images.length - 1) return;
slide.style.transition = "transform 0.5s ease-in-out";
counter++;
slide.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener('click', () => {
if (counter <= 0) return;
slide.style.transition = "transform 0.5s ease-in-out";
counter--;
slide.style.transform = `translateX(${-size * counter}px)`;
});

// Добавим автопрокрутку
setInterval(() => {
if (counter >= images.length - 1) {
counter = -1;
}
counter++;
slide.style.transition = "transform 0.5s ease-in-out";
slide.style.transform = `translateX(${-size * counter}px)`;
}, 5000);
});