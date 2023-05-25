// getting elements DOM
const cards = document.querySelectorAll('.card');
const popUp = document.getElementById('pop_up');

cards.forEach((card) => {
    const button = card.querySelector('.button-project');
    button.addEventListener('click', showPopUp);
});

//showing the pop-up
function showPopUp(event) {
    event.preventDefault();
  
    const card = event.target.closest('.card');
    const title = card.querySelector('.title').textContent;
    const description = card.querySelector('.text').textContent;
  
    // Crear el contenido del pop-up
    const popUpContent = `
      <h2>${title}</h2>
      <p>${description}</p>
      <button class="close-button" onclick="closePopUp()">Close</button>
    `;
  
    // Mostrar el pop-up con el contenido generado
    popUp.innerHTML = popUpContent;
    popUp.classList.remove('hidden');
  }
  