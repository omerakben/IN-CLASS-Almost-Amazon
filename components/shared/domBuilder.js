import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
    <div id="navigation" role="navigation"></div>
    <main id="main-container" class="container mt-5 pt-4" role="main">
      <div id="loading-container" class="text-center d-none">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div id="add-button"></div>
      <div id="form-container"></div>
      <div id="store"></div>
      <div id="view"></div>
      <div id="cart-container"></div>
    </main>`;

  const appElement = document.querySelector('#app');
  if (!appElement) {
    console.error('Could not find #app element');
    return;
  }

  renderToDOM('#app', domString);
};

export default domBuilder;
