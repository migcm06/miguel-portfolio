// getting elements DOM
const cards = document.querySelectorAll('.card');
const popUp = document.getElementById('pop_up');

cards.forEach((card) => {
    const button = card.querySelector('.button-project');
    button.addEventListener('click', showPopUp);
  });
  