import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import { getBooks } from '../api/bookData';
import { showBooks } from '../pages/books';

const startApp = (user) => {
  domBuilder(); // BUILD THE DOM
  domEvents(user); // Pass user to domEvents
  formEvents(user); // Pass user to formEvents
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(user); // Pass user to navigationEvents

  // Get books and show them on the DOM
  getBooks(user.uid).then((books) => {
    if (books.length) {
      showBooks(books);
    } else {
      document.querySelector('#store').innerHTML = '<h1>No Books Found</h1>';
    }
  }).catch((error) => {
    console.error('Error getting books:', error);
  });
};

export default startApp;
