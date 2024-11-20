import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyBooks = () => {
  const domString = '<h1>No Books</h1>';
  renderToDOM('#store', domString);
};

const showBooks = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-book-btn">Add A Book</button>';
  renderToDOM('#add-button', btnString);

  const domString = array.map((item) => `
    <div class="card book-card">
      <img 
        class="card-img-top" 
        src=${item.image} 
        alt="${item.title}" 
        style="height: 400px;"
        onerror="this.src='../images/default-book.png'"
      >
      <div class="card-body" style="height: 180px;">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text bold">${item.sale ? `<span class="badge bg-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}</p>
        <hr>
        <div class="btn-group" role="group" aria-label="Book actions">
          <i class="btn btn-success fas fa-eye" id="view-book-btn--${item.firebaseKey}" aria-label="View book"></i>
          <i class="fas fa-edit btn btn-info" id="edit-book-btn--${item.firebaseKey}" aria-label="Edit book"></i>
          <i class="btn btn-danger fas fa-trash-alt" id="delete-book-btn--${item.firebaseKey}" aria-label="Delete book"></i>
        </div>
      </div>
    </div>
  `).join('');

  renderToDOM('#store', domString);
};

export { showBooks, emptyBooks };
