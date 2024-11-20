import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyAuthors = () => {
  const domString = '<h1>No Authors</h1>';
  renderToDOM('#store', domString);
};

const showAuthors = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add An Author</button>';
  renderToDOM('#add-button', btnString);

  const domString = array.map((item) => `
    <div class="card author-card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.email}</h6>
        <h5 class="card-title">${item.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i> Favorite</span>' : ''}</h5>
        <hr>
        <div class="btn-group" role="group" aria-label="Author actions">
          <i class="btn btn-success fas fa-eye" id="view-author-btn--${item.firebaseKey}" aria-label="View author"></i>
          <i class="fas fa-edit btn btn-info" id="update-author-btn--${item.firebaseKey}" aria-label="Edit author"></i>
          <i class="btn btn-danger fas fa-trash-alt" id="delete-author-btn--${item.firebaseKey}" aria-label="Delete author"></i>
        </div>
      </div>
    </div>
  `).join('');

  renderToDOM('#store', domString);
};

export { showAuthors, emptyAuthors };
