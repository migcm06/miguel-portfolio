const menuMobile = document.querySelector('#menu');
const open = document.querySelector('#open');
const close = document.querySelector('#close');
const links = document.querySelectorAll('#menu a');

open.addEventListener('click', () => {
  menuMobile.classList.add('observable');
});

close.addEventListener('click', () => {
  menuMobile.classList.remove('observable');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    menuMobile.classList.remove('observable');
  });
});
