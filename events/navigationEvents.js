import { signOut } from '../utils/auth';
import { getBooks, booksOnSale } from '../api/bookData';
import { showBooks } from '../pages/books';
import { favoriteAuthor, getAuthors } from '../api/authorData';
import { showAuthors } from '../pages/authors';

const navigationEvents = (user) => {
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#sale-books').addEventListener('click', () => {
    if (user) {
      booksOnSale(user.uid).then(showBooks);
    } else {
      console.warn('User must be logged in to view sale books');
    }
  });

  document.querySelector('#all-books').addEventListener('click', () => {
    if (user) {
      getBooks(user.uid).then(showBooks);
    } else {
      console.warn('User must be logged in to view books');
    }
  });

  document.querySelector('#authors').addEventListener('click', () => {
    if (user) {
      getAuthors(user.uid).then(showAuthors);
    } else {
      console.warn('User must be logged in to view authors');
    }
  });

  document.querySelector('#fav-authors').addEventListener('click', () => {
    if (user) {
      favoriteAuthor(user.uid).then(showAuthors);
    } else {
      console.warn('User must be logged in to view favorite authors');
    }
  });

  document.querySelector('#search').addEventListener('keyup', (e) => {
    if (user) {
      const searchValue = document.querySelector('#search').value.toLowerCase();

      if (e.keyCode === 13) {
        getBooks(user.uid).then((books) => {
          const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(searchValue)
            || book.description.toLowerCase().includes(searchValue));
          showBooks(filteredBooks);
          document.querySelector('#search').value = '';
        });
      }
    } else {
      console.warn('User must be logged in to search');
    }
  });

  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('authors-link')) {
      if (user) {
        getAuthors(user.uid).then(showAuthors);
      } else {
        console.warn('User must be logged in to view authors');
      }
    }
  });
};

export default navigationEvents;
