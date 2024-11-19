import { signOut } from '../utils/auth';
import { getBooks, booksOnSale, searchBooks } from '../api/bookData';
import { getAuthors } from '../api/authorData';
import { showBooks } from '../pages/books';
import { showAuthors } from '../pages/authors';
import addBookForm from '../components/forms/addBookForm';
import addAuthorForm from '../components/forms/addAuthorForm';
import resetData from '../utils/resetData';

const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // ALL BOOKS
  document.querySelector('#all-books').addEventListener('click', () => {
    getBooks().then(showBooks);
  });

  // BOOKS ON SALE
  document.querySelector('#sale-books').addEventListener('click', () => {
    booksOnSale().then(showBooks);
  });

  // AUTHORS
  // TODO: If the array is empty because there are no authors, make sure to use the emptyAuthor function
  document.querySelector('#authors').addEventListener('click', () => {
    getAuthors().then((authors) => {
      if (authors.length) {
        showAuthors(authors);
      } else {
        console.warn('No authors found');
      }
    });
  });

  // SEARCH
  // TODO: IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
  document.querySelector('#search').addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      const searchValue = document.querySelector('#search').value.toLowerCase();
      searchBooks(searchValue).then((books) => {
        if (books.length) {
          showBooks(books);
        } else {
          console.warn('No books found');
        }
      });
      document.querySelector('#search').value = '';
    }
  });

  // ADD BOOK On NavBar
  document.querySelector('#add-book-btn').addEventListener('click', () => {
    addBookForm();
  });

  // ADD AUTHOR On NavBar
  document.querySelector('#add-author-btn').addEventListener('click', () => {
    addAuthorForm();
  });

  // FAVORITE AUTHORS
  document.querySelector('#favorite-authors').addEventListener('click', () => {
    getAuthors().then((authors) => {
      const favoriteAuthors = authors.filter((author) => author.favorite);
      showAuthors(favoriteAuthors);
    });
  });

  // RESET DATA
  document.querySelector('#reset-data').addEventListener('click', () => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Are you sure you want to reset the data? This cannot be undone!')) {
      resetData().then(() => {
        window.location.reload(); // Reload the page after reset
      }).catch((error) => {
        console.error('Error resetting data:', error);
      });
    }
  });
};

export default navigationEvents;
