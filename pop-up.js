//Object
const projects = [
    {
        name: 'Tonic',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        image: './images/facepic.png',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        seeLive: 'https://example.com',
        seeSource: 'https://github.com/migcm06/miguel-portfolio.git',
        textPopUp: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illum tempore aliquam similique aperiam officia soluta dolorum neque velit aspernatur odit libero animi quod deserunt praesentium accusantium possimus ad iste sed ratione, aut vel repellendus obcaecati quia. Dorime interimo adapare dorime, ameno ameno latire, latiremo dorime, interimo adapare ie molari ameno, ameno dore ameno dorime`,
        frame: './images/fame2.png',
        cover: './images/popup.png'
    },
    {
        name: 'Multi-Post',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        image: './images/portfolio-desktop-2.png',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        seeLive: 'https://example.com',
        seeSource: 'https://github.com/migcm06/miguel-portfolio.git',
        textPopUp: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illum tempore aliquam similique aperiam officia soluta dolorum neque velit aspernatur odit libero animi quod deserunt praesentium accusantium possimus ad iste sed ratione, aut vel repellendus obcaecati quia. Dorime interimo adapare dorime, ameno ameno latire, latiremo dorime, interimo adapare ie molari ameno, ameno dore ameno dorime`,
        frame: './images/frame3.png',
        cover: './images/popup.png'
    },
]; 

const card = document.querySelector('.card');

function showingCard() {
    for (const [index, project] of projects.reverse().entries()) {
        const listOfTech = project.technologies.map((tech) => `<li>${tech}</li>`).join('');

        const cardDesign = `
        <div class="card" id="card_${index}">
        <img src="${project.image}" alt="a_screenshot" class="tonic screen-pic">
        <div class="text-card">
            <h2 class="title cards">${project.name}</h2>
            <img src="${project.frame}" alt="frame">
            <p class="text">
                ${project.description}
            </p>
            <ul>
                ${listOfTech}
            </ul>
            <a href="#" class="button project tonic" onclick="popUpOn(${index})">See project</a>
        </div>
    </div>
    `;
        card.insertAdjacentHTML('afterbegin', cardDesign);
    }
}

showingCard();

const section = document.querySelector('#cards');
const popUp = document.querySelector('#pop_up');
const closePopupButton = document.querySelector('#close-popup');

function popUpOn(data) {
    const { name, frame, cover, textPopUp, seeLive, seeSource, technologies } = projects[data];
    const listOfTech = technologies.map((tech) => `<li>${tech}</li>`).join('');

    // Mostrar el pop-up
    popUp.classList.remove('hidden');

    const popupHtml = `
    <div id="popup-container">
        <h2>${name}</h2>
        <button id="close-popup"><i class="bi bi-x-lg"></i></button>
        <img src="${frame}" alt="frame">
        <img src="${cover}" alt="Project cover">
        <p>${textPopUp}</p>
        <ul>
            ${listOfTech}
        </ul>
        <div class="popup-buttons">
            <a href="${seeLive}" class="popup-button">See Live</a>
            <a href="${seeSource}" class="popup-button">See Source</a>
        </div>
    </div>
    `;
    popUp.innerHTML = popupHtml;

    // Agregar un listener de evento al botón de cierre del pop-up
    const closePopupButton = document.querySelector('#close-popup');
    closePopupButton.addEventListener('click', closePopup);
}

function closePopup() {
    // Ocultar el pop-up
    popUp.classList.add('hidden');
    popUp.innerHTML = '';
}
