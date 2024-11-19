import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthor = (obj) => {
  clearDom();

  const domString = `
    <div class="mt-5 d-flex flex-wrap">
      <div class="text-white ms-5 details">
        <h5>${obj.first_name} ${obj.last_name} ${obj.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
        Author Email: <a href="mailto:${obj.email}">${obj.email}</a>
        <hr>
        <div id="authorBooks"></div>
      </div>
    </div>`;

  renderToDOM('#view', domString);

  let bookString = '';
  obj.books.forEach((book) => {
    bookString += `
      <div class="card">
        <img class="card-img-top" src=${book.image} alt=${book.title} style="height: 400px;">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text bold">${book.sale ? `<span class="badge bg-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${book.price}` : `$${book.price}`}</p>
        </div>
      </div>`;
  });

  renderToDOM('#authorBooks', bookString);
};

export default viewAuthor; 