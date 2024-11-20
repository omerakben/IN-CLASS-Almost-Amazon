import { deleteBook, getSingleBook } from './bookData';
import { getSingleAuthor, getAuthorBooks, deleteSingleAuthor } from './authorData';

const getBookDetails = (firebaseKey) => new Promise((resolve, reject) => {
  if (!firebaseKey) {
    reject(new Error('Firebase key is required'));
    return;
  }

  getSingleBook(firebaseKey)
    .then((bookObj) => {
      if (!bookObj) {
        resolve(null);
        return;
      }
      getSingleAuthor(bookObj.author_id)
        .then((authorObj) => {
          resolve({ ...bookObj, authorObj });
        });
    })
    .catch(reject);
});

const getAuthorDetails = (firebaseKey) => new Promise((resolve, reject) => {
  if (!firebaseKey) {
    reject(new Error('Firebase key is required'));
    return;
  }

  getSingleAuthor(firebaseKey)
    .then((authorObj) => {
      if (!authorObj) {
        resolve(null);
        return;
      }
      getAuthorBooks(authorObj.firebaseKey)
        .then((bookObj) => {
          resolve({ ...authorObj, bookObj });
        });
    })
    .catch(reject);
});

const deleteAuthorBooksRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  if (!firebaseKey) {
    reject(new Error('Firebase key is required'));
    return;
  }

  getAuthorBooks(firebaseKey)
    .then((authorBooksArray) => {
      if (!authorBooksArray.length) {
        return deleteSingleAuthor(firebaseKey);
      }
      const deleteBookPromises = authorBooksArray.map((book) => deleteBook(book.firebaseKey));
      return Promise.all(deleteBookPromises)
        .then(() => deleteSingleAuthor(firebaseKey));
    })
    .then(resolve)
    .catch(reject);
});

export { getBookDetails, getAuthorDetails, deleteAuthorBooksRelationship };
