$(document).ready(function () {
   $('.slider').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
   });
});
//---------------------------Учителя
const teachersCardsBlock1 = document.querySelector('#teachersCardsBlock1');
const teachersCardsBlock2 = document.querySelector('#teachersCardsBlock2');
const teachersBtnPrev = document.querySelector('#teachersBtnPrev');
const teachersBtnNext = document.querySelector('#teachersBtnNext');
//--------------------------меню
const buttonBurger = document.querySelector('#buttonMenu');
const closeButtonMenu = document.querySelector('#closeButtonMenu');
const navMenu = document.querySelector('#navMenu');
const body = document.querySelector('body');
const navList = document.querySelector('#navList');
//--------------------------------------
//---------------------------Учителя
teachersBtnNext.addEventListener('click', () => {
   teachersCardsBlock1.classList.add('close-teachers-block');
   teachersCardsBlock2.classList.remove('close-teachers-block');
   teachersBtnNext.style.display = 'none';
   teachersBtnPrev.style.display = 'flex';
});
teachersBtnPrev.addEventListener('click', () => {
   teachersCardsBlock2.classList.add('close-teachers-block');
   teachersCardsBlock1.classList.remove('close-teachers-block');
   teachersBtnNext.style.display = 'flex';
   teachersBtnPrev.style.display = 'none';
});
//--------------------------меню
buttonBurger.addEventListener('click', () => {
   navMenu.classList.add('header__nav--active');
   body.classList.add('body--no-scroll');
});
closeButtonMenu.addEventListener('click', () => {
   navMenu.classList.remove('header__nav--active');
   body.classList.remove('body--no-scroll');
});
navList.addEventListener('click', (e) => {
   if (e.target.classList.contains('header__nav-link')) {
      navMenu.classList.remove('header__nav--active');
      body.classList.remove('body--no-scroll');
   }
});

const animatedItems = document.querySelectorAll('.fade-in-on-scroll');

const observer = new IntersectionObserver(
   (entries) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Если анимация однократная — отключаем наблюдение
            observer.unobserve(entry.target);
         }
      });
   },
   {
      threshold: 0.1, // процент видимости, когда сработает анимация
   }
);

animatedItems.forEach((item) => observer.observe(item));
