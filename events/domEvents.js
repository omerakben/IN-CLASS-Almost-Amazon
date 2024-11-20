import { getAuthors, getSingleAuthor } from '../api/authorData';
import viewBook from '../pages/viewBook';
import { getBooks, deleteBook, getSingleBook } from '../api/bookData';
import { showAuthors } from '../pages/authors';
import { showBooks } from '../pages/books';
import addBookForm from '../components/forms/addBookForm';
import addAuthorForm from '../components/forms/addAuthorForm';
import { getBookDetails, getAuthorDetails, deleteAuthorBooksRelationship } from '../api/mergedData';
import viewAuthor from '../pages/viewAuthors';

// eslint-disable-next-line no-alert
const handleDelete = (message) => window.confirm(message);

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // Book Events
    if (e.target.id.includes('add-book-btn')) {
      addBookForm({ uid: user.uid });
    }

    if (e.target.id.includes('edit-book-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleBook(firebaseKey)
        .then((bookObj) => addBookForm(bookObj))
        .catch((error) => console.error('Error getting book:', error));
    }

    if (e.target.id.includes('delete-book')) {
      const [, firebaseKey] = e.target.id.split('--');
      if (handleDelete('Are you sure you want to delete this book?')) {
        deleteBook(firebaseKey)
          .then(() => getBooks(user.uid))
          .then(showBooks)
          .catch((error) => console.error('Error deleting book:', error));
      }
    }

    if (e.target.id.includes('view-book-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getBookDetails(firebaseKey)
        .then(viewBook)
        .catch((error) => console.error('Error viewing book:', error));
    }

    // Author Events
    if (e.target.id.includes('add-author-btn')) {
      addAuthorForm({ uid: user.uid });
    }

    if (e.target.id.includes('update-author-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleAuthor(firebaseKey)
        .then((authorObj) => addAuthorForm(authorObj))
        .catch((error) => console.error('Error getting author:', error));
    }

    if (e.target.id.includes('delete-author-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      if (handleDelete('Are you sure you want to delete this author?')) {
        deleteAuthorBooksRelationship(firebaseKey)
          .then(() => getAuthors(user.uid))
          .then(showAuthors)
          .catch((error) => console.error('Error deleting author:', error));
      }
    }

    if (e.target.id.includes('view-author-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getAuthorDetails(firebaseKey)
        .then(viewAuthor)
        .catch((error) => console.error('Error viewing author:', error));
    }
  });
};

export default domEvents;
