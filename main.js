const menuMobile = document.querySelector('#menu');
const open = document.querySelector('#open');
const close = document.querySelector('#close');

open.addEventListener('click', () => {
  menuMobile.classList.add('observable');
});

close.addEventListener('click', () => {
  menuMobile.classList.remove('observable');
});