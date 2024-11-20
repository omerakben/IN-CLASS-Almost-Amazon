import renderToDOM from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5" role="navigation" aria-label="Main navigation">
      <div class="container-fluid">
        <a class="navbar-brand title" href="#" aria-label="Almost Amazon Home">Almost Amazon</a>
        <button 
          class="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarText" 
          aria-controls="navbarText" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#" id="all-books" aria-current="page">
                All Books
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="sale-books" aria-label="View books on sale">Books on Sale</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="authors" aria-label="View authors">Authors</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="fav-authors" aria-label="View favorite authors">Favorite Authors</a>
            </li>
            <li class="nav-item">
              <div class="search-container">
                <input
                  class="form-control search-input"
                  id="search"
                  placeholder="Search Book Titles"
                  aria-label="Search books"
                />
              </div>
            </li>
          </ul>
          <div class="d-flex align-items-center">
            <div id="cart-button" class="me-3"></div>
            <div id="logout-button"></div>
          </div>
        </div>
      </div>
    </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
