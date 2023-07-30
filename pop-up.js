document.addEventListener('DOMContentLoaded', () => {
  const projects = [
    {
      title: 'Tonic',
      imgSrc: './images/portfolio.png',
      popUpImg: './images/popUp.png',
      frame: './images/fame2.png',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      description_popUp: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      tags: ['HTML', 'CSS', 'JavaScript'],
      popupIndex: 0,
    },
    {
      title: 'Multi-Post Stories',
      imgSrc: './images/portfolio2.png',
      popUpImg: './images/popUp.png',
      frame: './images/fame2.png',
      description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
      description_popUp: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      tags: ['HTML', 'CSS', 'JavaScript'],
      popupIndex: 1,
      isSecondProject: true,
    },
    {
      title: 'Facebook 360',
      imgSrc: './images/portfolio.png',
      popUpImg: './images/popUp.png',
      frame: './images/fame2.png',
      description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
      description_popUp: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      tags: ['HTML', 'CSS', 'JavaScript'],
      popupIndex: 2,
    },
  ];

  const cardsSection = document.getElementById('cards');
  const overlay = document.querySelector('.overlay');
  const popUpContainer = document.querySelector('.pop-up-container');
  const popUp = document.querySelector('.pop-up');

  function createCard(project) {
    const projectCard = document.createElement('div');
    projectCard.classList.add('grid-item', 'card');
    if (project.isSecondProject) {
      projectCard.classList.add('second-project');
    }

    projectCard.innerHTML = `
      <img src="${project.imgSrc}" alt="a_screenshot" class="screen-pic">
      <div class="text-card">
        <h2 class="title cards">${project.title}</h2>
        <img src="${project.frame}" alt="date" class="card-frame">
        <p class="text">${project.description}</p>
        <ul class="code-links">
          ${project.tags.map((tag) => `<li class="tag"><a href="#">${tag}</a></li>`).join('')}
        </ul>
        <a href="#" class="button-project" onclick="openPopup(${project.popupIndex})">See project</a>
      </div>
    `;

    if (project.title === 'Facebook 360') {
      const titleElement = projectCard.querySelector('.title');
      titleElement.style.marginTop = '-6%';
    }

    cardsSection.appendChild(projectCard);

    projectCard.querySelector('.button-project').addEventListener('click', () => {
      const popupHTML = `
        <div id="close-pop"><i class="bi bi-x"></i></div>
        <h2 class="title-pop-up">${project.title}</h2>
        <img src="${project.frame}" class="frame-pop">
        <div class="pop-up-img">
          <img src="${project.popUpImg}" alt="Background image" class="pop-up-image desktop">
        </div>
        <div class="text-pop-up">${project.description_popUp}</div>
        <div class="right-links">
          <div class="tag-pop-up">${project.tags.map((tech) => `<a href="#" class="project-tech">${tech}</a>`).join('')}
          <div class="gray-line"></div>
        </div>
          <div class="buttons-pop">
            <a class="btn-pop" href="${project.seeLive}" target="_blank">See Live <img src="./images/Export.svg" class="icon-pop"></a>
            <a class="btn-pop" href="${project.seeSource}" target="_blank">See Source <img src="./images/Github.svg" class="icon-pop"></a>
          </div>
        </div>
      `;

      popUp.innerHTML = popupHTML;
      overlay.style.display = 'block';
      popUp.style.display = 'block';
      popUp.style.height = '97%'
      popUpContainer.style.display = 'block';

      const closeBtn = document.getElementById('close-pop');
      closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        popUp.style.display = 'none';
      });
    });
  }

  projects.forEach((project) => {
    createCard(project);
  });
});
