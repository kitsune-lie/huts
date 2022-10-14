


const swiperV = new Swiper('.swiper-v', {
  direction: 'vertical',
  loop: true,

  scrollbar: {
    el: '.swiper-scrollbar',

    hide: false,
    draggable: true,
    snapOnRelease: true,
  },
});


const swiperH = new Swiper('.swiper-h', {

  loop: true,

  autoplay: {
    delay: 2000,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',

  },

});

const swiperPhoto = new Swiper('.main__photo', {
slidesPerView:3,
spaceBetween:30,
  loop: true,
  autoplay: {
    delay: 2500,
  },
  

});



const langMenu = document.querySelector(".lang-menu");
const langList = document.querySelector(".lang-list");
langMenu.addEventListener("click", function () {
  langList.classList.toggle("actived");


});

$('.lang-img-ge').click(function(){
    $(".selected__lang").attr("src", "/img/icons/flag_germany.svg")
  })
$('.lang-img-uk').click(function(){
    $(".selected__lang").attr("src", "/img/icons/flag_uk.svg")
  })
  $('.lang-img-de').click(function(){
    $(".selected__lang").attr("src", "/img/icons/flag_denmark.svg")
  })


$(document).ready(function () {
  $('.menu-burger__header').click(function () {
    $('.menu-burger__header').toggleClass('open-menu');
    $('.header__menu').toggleClass('open-menu');
  });
});

// $(document).ready(function () {
//   $('menu-burger__header').click(function (event) {
//     $('.menu-burger__header', '.header-list').toggleClass('active');
//     $('body').toggleClass('fixed-page');
//   });
// });