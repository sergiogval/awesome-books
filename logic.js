const title = document.querySelector('.title');
const author = document.querySelector('.author');
const addBook = document.getElementById('addBook');
const bookList = document.getElementById('bookList');
const bookItem = document.querySelectorAll('.book');

addBook.addEventListener('click', () => {
  const titleValue = title.value;
  const authorValue = author.value;
  // eslint-disable-next-line no-undef
  const book = {
    title: titleValue,
    //============================
  });
bookItem.innerHTML = `
    <div class="book"
    <div>${this.title}</div>
    <div>${this.author}</div>
    <button type="button" class="remove">Remove</button>
    <hr>
    </div>`;
bookList.appendChild(bookItem);
