import { createBook, getBooks, updateBook } from '../api/bookData';
import { createAuthor, getAuthors, updateAuthor } from '../api/authorData';
import { showBooks } from '../pages/books';
import { showAuthors } from '../pages/authors';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // CLICK EVENT => GRABS VALUES THROUGH A FORM AND SUBMITS VALUES FOR ADDING A BOOK 04
    if (e.target.id.includes('submit-book')) {
      console.warn('CLICKED SUBMIT BOOK', e.target.id);
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        author_id: document.querySelector('#author_id').value,
        sale: document.querySelector('#sale').checked,
        uid: user.uid,
      };

      createBook(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateBook(patchPayload).then(() => {
          getBooks(user.uid).then(showBooks);
        });
      });
    }

    // CLICK EVENT => GRABS MODIFIED VALUES THROUGH A FORM AND SUBMITS VALUES FOR EDITING A BOOK 04
    if (e.target.id.includes('update-book')) {
      console.warn('CLICKED UPDATE BOOK', e.target.id);
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        author_id: document.querySelector('#author_id').value,
        sale: document.querySelector('#sale').checked,
        firebaseKey,
        uid: user.uid,
      };
      updateBook(payload).then(() => {
        getBooks(user.uid).then(showBooks);
      });
    }

    // CLICK EVENT => GRABS VALUES THROUGH A FORM AND SUBMITS VALUES FOR ADDING AN AUTHOR 04L

    if (e.target.id.includes('submit-author')) {
      console.warn('CLICKED SUBMIT AUTHOR');
      const payload = {
        email: document.querySelector('#email').value,
        first_name: document.querySelector('#first_name').value,
        favorite: document.querySelector('#favorite').checked,
        last_name: document.querySelector('#last_name').value,
        uid: user.uid,
      };

      createAuthor(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateAuthor(patchPayload).then(() => {
          getAuthors(user.uid).then(showAuthors);
        });
      });
    }

    // CLICK EVENT => GRABS MODIFIED VALUES THROUGH A FORM AND SUBMITS VALUES FOR EDITING AN AUTHOR 04L

    if (e.target.id.includes('update-author')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        email: document.querySelector('#email').value,
        first_name: document.querySelector('#first_name').value,
        favorite: document.querySelector('#favorite').checked,
        last_name: document.querySelector('#last_name').value,
        uid: user.uid,
        firebaseKey,
      };

      updateAuthor(payload).then(() => getAuthors(user.uid).then(showAuthors));
    }
  });
};

export default formEvents;
