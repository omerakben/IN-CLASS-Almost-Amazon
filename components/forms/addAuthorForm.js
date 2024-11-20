import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addAuthorForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-author--${obj.firebaseKey}` : 'submit-author'}" class="mb-4">
      <div class="form-group">
        <label for="first_name" class="required">First Name</label>
        <input 
          type="text" 
          class="form-control" 
          id="first_name" 
          placeholder="First Name" 
          value="${obj.first_name || ''}" 
          required
          minlength="2"
          pattern="[A-Za-z]+"
          aria-required="true"
        >
        <div class="invalid-feedback">Please enter a valid first name</div>
      </div>
      <div class="form-group">
        <label for="last_name" class="required">Last Name</label>
        <input 
          type="text" 
          class="form-control" 
          id="last_name" 
          placeholder="Last Name" 
          value="${obj.last_name || ''}" 
          required
          minlength="2"
          pattern="[A-Za-z]+"
          aria-required="true"
        >
        <div class="invalid-feedback">Please enter a valid last name</div>
      </div>
      <div class="form-group">
        <label for="email" class="required">Email</label>
        <input 
          type="email" 
          class="form-control" 
          id="email" 
          aria-describedby="emailHelp" 
          placeholder="Enter Email" 
          value="${obj.email || ''}" 
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,}$"
          aria-required="true"
        >
        <div class="invalid-feedback">Please enter a valid email address</div>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-check mb-3">
        <input 
          type="checkbox" 
          class="form-check-input" 
          id="favorite" 
          ${obj.favorite ? 'checked' : ''}
          aria-label="Mark as favorite author"
        >
        <label class="form-check-label" for="favorite">Favorite Author?</label>
      </div>
      <button 
        type="submit" 
        class="btn btn-primary mt-3"
        id="submit-btn"
      >
        ${obj.firebaseKey ? 'Update' : 'Submit'} Author
      </button>
    </form>`;

  renderToDOM('#form-container', domString);

  // Add form validation
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }
    form.classList.add('was-validated');
  });
};

export default addAuthorForm;
