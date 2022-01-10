import myBooks from './index.js';

const title = document.querySelectorAll('.title');
const author = document.querySelectorAll('.author');
const addBook = document.getElementById('addBook');

window.addEventListener('load', () => {
  if (localStorage.getItem('data')) {
    const data = JSON.parse(localStorage.getItem('data'));
    title.value = data.title;
    author.value = data.author;
  }
});

addBook.addEventListener('click', () => {
  const data = {
    title: title.value,
    author: author.value,
  };
  myBooks.push('data');
  localStorage.setItem('data', JSON.stringify(data));
});

// title.addEventListener('input', saveLocalStore);
// author.addEventListener('input', saveLocalStore);
