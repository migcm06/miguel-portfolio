function showErrorMessage(message) {
  const errorDiv = document.getElementById('email-error');
  errorDiv.textContent = message;
  errorDiv.classList.add('active');
}

function hideErrorMessage() {
  const errorDiv = document.getElementById('email-error');
  errorDiv.classList.remove('active');
}

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

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameInput = form.elements.name;
  const emailInput = form.elements.email;
  const commentInput = form.elements.comment;

  if (nameInput.value.trim() === '') {
    showErrorMessage('Please enter your name.');
    return;
  }

  if (!isValidEmail(emailInput.value.trim())) {
    showErrorMessage('Please enter a valid email address.');
    return;
  }

  if (emailInput.value !== emailInput.value.toLowerCase()) {
    showErrorMessage('Please, use only lowercase.');
    return;
  }

  if (commentInput.value.trim() === '') {
    showErrorMessage('Please write your message.');
    return;
  }

  form.submit();
});

document.getElementById('form').addEventListener('input', (event) => {
  const emailInput = event.target.elements.email;
  if (isValidEmail(emailInput.value.trim())) {
    hideErrorMessage();
  }
});

// FORM STORAGE FUNCTIONALITY

// SAVE THE FORMS' VALUES
const formArr = Array.from(document.querySelectorAll("form *"))
for(let i = 0; i < formArr.length; i += 1) {
  formArr[i].onchange = saveForm
}

function saveForm(element) {
  // use the local storage api to save the form's elements values
  // TODO save values to localStorage
  localStorage.setItem()
}
