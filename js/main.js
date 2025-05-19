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

teachersBtnNext.addEventListener('click', () => {
   teachersCardsBlock1.classList.add('close-teachers-block');
   teachersCardsBlock2.classList.remove('close-teachers-block');
});
teachersBtnPrev.addEventListener('click', () => {
   teachersCardsBlock2.classList.add('close-teachers-block');

   teachersCardsBlock1.classList.remove('close-teachers-block');
});
