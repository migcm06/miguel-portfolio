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

function openPopup() {
    var overlay = document.querySelector('.overlay');
    overlay.classList.remove('hidden');

    var popup = document.querySelector('.pop-up');
    popup.classList.remove('hidden');
}
