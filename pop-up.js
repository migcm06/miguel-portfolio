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
        frame: './images/fame2.png'
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
        frame: './images/frame3.png'
    },
]; 

const card = document.querySelector('.card');

function showingCard() {
  
    for (const project of projects.reverse()) {
        const listOfTech = project.technologies.map((tech) => `<li>${tech}</li>`).join('');
        
        const cardDesign = `
        <div class="card" id="card_one">
        <img src="${project.image}" alt="a_screentshot" class="tonic screen-pic">
        <div class="text-card">
            <h2 class="title cards">${project.name}</h2>
            <img src="${project.frame}" alt="frame" class="frame">
            <p class="text">
                ${project.description}
            </p>
            <ul>
                ${listOfTech}
            </ul>
            <a href="#" class="button project tonic">See project</a>
        </div>
    </div>
    `;
    card.insertAdjacentHTML('afterbegin', cardDesign);
    };
};

showingCard();



