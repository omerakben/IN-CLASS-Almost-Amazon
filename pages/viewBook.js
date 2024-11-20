import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewBook = (obj) => {
  clearDom();

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
    <div class="d-flex flex-column">
      <img 
        src=${obj.image} 
        alt="${obj.title}" 
        style="width: 300px;"
        onerror="this.src='../images/default-book.png'"
      >
      <div class="mt-5">
        <div class="btn-group" role="group" aria-label="Book actions">
          <i id="edit-book-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info" aria-label="Edit book"></i>
          <i id="delete-book--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt" aria-label="Delete book"></i>
        </div>
      </div>
    </div>
    <div class="text-white ms-5 details">
      <h5>${obj.title} by ${obj.authorObj.first_name} ${obj.authorObj.last_name}${obj.authorObj.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
      <p>Author Email: <a href="mailto:${obj.authorObj.email}">${obj.authorObj.email}</a></p>
      ${obj.description ? `<p>${obj.description}</p>` : ''}
      <hr>
      <p>${obj.sale ? `<span class="badge bg-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${obj.price}` : `$${obj.price}`}</p>      
    </div>
  </div>`;

  renderToDOM('#view', domString);
};

export default viewBook;
