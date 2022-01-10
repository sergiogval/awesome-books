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

const remove = document.querySelectorAll('.remove');

myBooks.forEach((elem) => {
  const bookList = document.getElementById('bookList');
  const bookItem = document.createElement('div');
  bookItem.innerHTML = `
  <div>${elem.title}</div>
  <div>${elem.author}</div>
  <button type="button"  class="remove">Remove</button>
  <hr>`;
  bookList.appendChild(bookItem);
});

remove.addEventListener('click', () => {
  const bookList = document.getElementById('bookList');
  const bookItem = document.createElement('div');
  bookList.removeChild(bookItem);
});