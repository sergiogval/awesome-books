const list = document.querySelector('.list');
const addNew = document.querySelector('.addNew');
const contact = document.querySelector('.contact');

addNew.addEventListener('click', () => {
  const form = document.getElementById('form');
  const contactSection = document.getElementById('contactSection');
  const listSection = document.getElementById('listSection');
  listSection.classList.add('hidden');
  contactSection.classList.add('hidden');
  form.classList.remove('hidden');
});

contact.addEventListener('click', () => {
  const form = document.getElementById('form');
  const contactSection = document.getElementById('contactSection');
  const listSection = document.getElementById('listSection');
  listSection.classList.add('hidden');
  form.classList.add('hidden');
  contactSection.classList.remove('hidden');
});

list.addEventListener('click', () => {
  const form = document.getElementById('form');
  const contactSection = document.getElementById('contactSection');
  const listSection = document.getElementById('listSection');
  form.classList.add('hidden');
  contactSection.classList.add('hidden');
  listSection.classList.remove('hidden');
});
