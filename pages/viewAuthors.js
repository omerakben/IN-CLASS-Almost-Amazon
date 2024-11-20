import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthor = (obj) => {
  clearDom();

  const authorInfo = `
  <div class="mt-3 d-flex flex-wrap">
    <div class="d-flex flex-row">
      <div id="viewInfoAuthorInfo">
        <h5>
          ${obj.first_name} ${obj.last_name}${obj.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}
        </h5>
        <p>Author Email: <a href="mailto:${obj.email}">${obj.email}</a></p>
        <div class="btn-group" role="group" aria-label="Author actions">
          <i id="update-author-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info" aria-label="Edit author"></i>
          <i id="delete-author-btn--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt" aria-label="Delete author"></i>
        </div>
      </div>
    </div>
  </div>
  <div id="viewAuthorDividing">
    <hr>
    <h5>Books</h5>
  </div>`;

  const booksString = obj.bookObj.map((book) => `
    <div class="d-flex flex-wrap">
      <div class="card book-card" style="width: 300px;">
        <img src=${book.image} alt="${book.title}" class="card-img-top" onerror="this.src='../images/default-book.png'">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text bold">
            ${book.sale ? `<span class="badge bg-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${book.price}` : `$${book.price}`}
          </p>
          <hr>
          <div class="btn-group" role="group" aria-label="Book actions">
            <i class="btn btn-success fas fa-eye" id="view-book-btn--${book.firebaseKey}" aria-label="View book"></i>
            <i class="fas fa-edit btn btn-info" id="edit-book-btn--${book.firebaseKey}" aria-label="Edit book"></i>
            <i class="btn btn-danger fas fa-trash-alt" id="delete-book-btn--${book.firebaseKey}" aria-label="Delete book"></i>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  renderToDOM('#view', authorInfo + booksString);
};

export default viewAuthor;
