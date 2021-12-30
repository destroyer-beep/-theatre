const navbarOpen = document.querySelector('.navbar__open');
const navbarClose = document.querySelector('.navbar__close');
const navbar = document.querySelector('.navbar');

navbarOpen.addEventListener('click', () => {
  navbar.classList.add('navbar__active');
})

navbarClose.addEventListener('click', () => {
  navbar.classList.remove('navbar__active');
})

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
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