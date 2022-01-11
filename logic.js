const myBooks = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
  }, {
    title: 'The Most Human Human',
    author: 'Brian Christian',
  }, {
    title: '1984',
    author: 'George Orwell',
  }];

const form = document.getElementById('form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const error = document.getElementById('error');
const bookList = document.getElementById('bookList');

myBooks.forEach((elem) => {
  const bookList = document.getElementById('bookList');
  const bookItem = document.createElement('div');
  bookItem.innerHTML = `
  <div class="book"
  <div>${elem.title}</div>
  <div>${elem.author}</div>
  <button type="button" class="remove">Remove</button>
  <hr>
  </div>`;
  bookList.appendChild(bookItem);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // eslint-disable-next-line no-use-before-define
  addBooks();
  // eslint-disable-next-line no-use-before-define
  remove();
  // eslint-disable-next-line no-use-before-define
  saveLocalStore();
});

function addBooks() {
  const titleText = title.value;
  const authorText = author.value;
  if (titleText === '' || authorText === '') {
    error.textContent = 'Please fill in all fields';
  } else {
    const bookItem = document.createElement('div');
    bookItem.innerHTML = `
    <div class="book">
      <div>${titleText}</div>
      <div>${authorText}</div>
      <button type="button" id="remove" class="remove">Remove</button>
      <hr>
    </div>`;
    bookList.appendChild(bookItem);
    // eslint-disable-next-line no-use-before-define
    title.value = '';
    author.value = '';
  }
  error.textContent = '';
}

function remove() {
  const removeButton = document.querySelectorAll('.remove');
  removeButton.forEach((elem) => {
    elem.addEventListener('click', () => {
      elem.parentNode.remove();
    });
  });
}

const book = {
  // eslint-disable-next-line no-undef
  title: `${titleText.value}`,
  // eslint-disable-next-line no-undef
  author: `${authorText.value}`,
};
// eslint-disable-next-line no-unused-vars
function saveLocalStore() {
  localStorage.setItem(book, JSON.stringify(book));
}

// eslint-disable-next-line no-unused-vars
function getLocalStorage() {
  localStorage.getItem('book', JSON.parse(book));
  title.value = book.title;
  author.value = book.author;
}
