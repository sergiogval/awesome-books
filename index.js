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

function remove() {
  const removeButton = document.querySelectorAll('.remove');
  removeButton.forEach((elem) => {
    elem.addEventListener('click', () => {
      elem.parentNode.remove();
    });
  });
}
remove();
