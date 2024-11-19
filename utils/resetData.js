import client from './client';
import sampleBooks from './sample_data/books.json';
import sampleAuthors from './sample_data/authors.json';

const endpoint = client.databaseURL;

const resetData = () => new Promise((resolve, reject) => {
  // Clear and load books
  fetch(`${endpoint}/books.json`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(sampleBooks),
  })
    .then((response) => response.json())
    .then(() => fetch(`${endpoint}/authors.json`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sampleAuthors),
    }))
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export default resetData;
