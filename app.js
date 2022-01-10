// eslint-disable rule-you-want-to-disable
// eslint-disable-next-line no-unused-vars
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

  const title = document.getElementById('title')
  const author = document.getElementById('author')
  const add = document.getElementById('add')
  function saveLocalStore() {
    const data = {
      title: title.value,
      author: author.value,
    }
    localStorage.setItem('data', JSON.stringify(data))
  }
  title.addEventListener('input', saveLocalStore)
  author.addEventListener('input', saveLocalStore)
  function getLocalStorage() {
    if (localStorage.getItem('data')) {
      const data = JSON.parse(localStorage.getItem('data'));
      title.value = data.title
      author.value = data.author
    }
  }

  title.addEventListener('input', saveLocalStore)
  author.addEventListener('input', saveLocalStore)
