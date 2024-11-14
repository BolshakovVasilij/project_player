

const menuBtn = document.querySelector ('.footer__menu-btn'); 
const menuMobile = document.querySelector ('.footer__list');
 menuBtn.addEventListener ('click', ()=> {menuMobile.classList.toggle ('footer-list--open')
 });
 const conditionMobile = document.querySelector ('.footer__conditions');
 menuBtn.addEventListener ('click', ()=> {conditionMobile.classList.toggle ('footer__conditions--open')
 });

 const navBtn = document.querySelector('.nav-btn');
 const navMobile = document.querySelector('.player-nav__list');
 navBtn.addEventListener ('click', ()=> {navMobile.classList.toggle ('player-nav__list--open')
});
