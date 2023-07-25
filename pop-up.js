const projects = [
  {
    name: 'Tonic',
    frame: './images/fame2.png',
    cover: './images/popUp.png',
    textPopUp: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</br> Lorem Ipsum is simply dummy text of the printing and typesetting indust. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    seeLive: 'https://example.com',
    seeSource: 'https://github.com/migcm06/miguel-portfolio.git',
  },
  {
    name: 'Multi-Post',
    frame: './images/fame2.png',
    cover: './images/popUp.png',
    textPopUp: 'Lorem ipsum dolor sit amet  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi voluptatibus consequatur iure consequuntur odit, ex ipsa debitis. Reiciendis veniam quae corporis non quis voluptatem nam maiores? Molestiae facere praesentium laborum?',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Query'],
    seeLive: 'https://example.com',
    seeSource: 'https://github.com/migcm06/miguel-portfolio.git',
  },
];
/* eslint-disable no-unused-vars */
function openPopup(index) {
  const overlay = document.querySelector('.overlay');
  const popUpContainer = document.querySelector('.pop-up-container');
  const popUp = document.querySelector('.pop-up');
  const project = projects[index];
  const buttons = document.querySelector('.button-project');

  const popupHTML = `
  <div id="close-pop"><i class="bi bi-x"></i></div>
    <h2 class="title-pop-up">${project.name}</h2>
    <img src="${project.frame}" class="frame-pop">
    <div class="pop-up-img">
      <img
        src="${project.cover}"
        alt="Background image"
        class="pop-up-image desktop"
      />
    </div>
    <div class="text-pop-up">${project.textPopUp}</div>
    <div class="right-links">
    <div class="tag-pop-up">${project.technologies.map((tech) => `<a href="#" class="project-tech">${tech}</a>`).join('')}</div>
    <div class="buttons-pop">
    <a class="btn-pop" href="${project.seeLive}" target="_blank">See Live <img src="./images/Export.svg" class="icon-pop"></a>
    <a class="btn-pop" href="${project.seeSource}" target="_blank">See Source <img src="./images/Github.svg" class="icon-pop"></a>
  </div>
  </div>
  `;

  popUp.innerHTML = popupHTML;
  overlay.style.display = 'block';
  popUp.style.display = 'block';
  popUpContainer.style.display = 'block';

  const closeBtn = document.getElementById('close-pop');
  closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    popUp.style.display = 'none';
  });
}
/* eslint-enable no-unused-vars */
