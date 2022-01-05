const navbarOpen = document.querySelector('.navbar__open');
const navbarClose = document.querySelector('.navbar__close');
const navbar = document.querySelector('.navbar');
const navbarItems = document.querySelector('.navbar__items');
const body = document.querySelector('body');
const navbarLink = document.querySelectorAll('.navbar__item_link');

navbarOpen.addEventListener('click', () => {
  navbar.classList.add('nav__show');
  body.classList.add('scroll__block');
})

navbarClose.addEventListener('click', () => {
  navbar.classList.remove('nav__show');
   body.classList.remove('scroll__block');
})

navbarLink.forEach(item => {
  item.addEventListener('click', (e) => {
    if (navbar.classList.contains('nav__show')) {
    navbar.classList.remove('nav__show');
    body.classList.remove('scroll__block');
    } else {
        return;
    }
  })
})

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  paginatiom: 'none',
});

const swipes = document.querySelectorAll('.swiper__slide');

swipes.forEach(item => {
  item.addEventListener('mouseenter', (e) => {
    e.stopPropagation();
    const countId = e.target.id[e.target.id.length - 1];
    const swiperShadow = document.getElementById(`swiper__shadow_${countId}`);
    const swiperHead = document.getElementById(`swiper__head_${countId}`);
    const swiperData = document.getElementById(`swiper__data_${countId}`);
    const swiperIcon = document.getElementById(`swiper__icon_${countId}`);

    console.log(swiperShadow, swiperHead)


    swiperShadow.classList.add('swiper__hidden');
    swiperHead.classList.add('swiper__hidden');
    swiperData.classList.add('swiper__hidden');
    swiperIcon.classList.remove('swiper__hidden');
  })
})

swipes.forEach(item => {
  item.addEventListener('mouseleave', (e) => {
    e.stopPropagation();
    const countId = e.target.id[e.target.id.length - 1];
    const swiperShadow = document.getElementById(`swiper__shadow_${countId}`);
    const swiperHead = document.getElementById(`swiper__head_${countId}`);
    const swiperData = document.getElementById(`swiper__data_${countId}`);
    const swiperIcon = document.getElementById(`swiper__icon_${countId}`);

    swiperShadow.classList.remove('swiper__hidden');
    swiperHead.classList.remove('swiper__hidden');
    swiperData.classList.remove('swiper__hidden');
    swiperIcon.classList.add('swiper__hidden');
  })
})

window.onscroll = function() {
    if(window.pageYOffset > 100) {
      navbarItems.classList.add('nav__background');
    } else {
      navbarItems.classList.remove('nav__background');
    }
};