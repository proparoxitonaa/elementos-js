class Componente extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const productImg = this.getAttribute('product-img');
      const productTitle = this.getAttribute('product-title');
      const productDescription = this.getAttribute('product-description');
      const productPrice = this.getAttribute('product-price');
      const productLink = this.getAttribute('product-link');
  
      const div = document.createElement("div");
      div.className = "card mb-3 mt-3";
      div.innerHTML = `
      <div class="row g-0">
              <div class="col-md-4">
                <img src="${productImg}" class="img-fluid rounded-start" alt="${productTitle}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${productTitle}</h5>
                  <p class="card-text">${productDescription}</p>
                  <p class="card-text">R$${productPrice}</p>
                  <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                  <a href="${productLink}" class="btn btn-primary">Ver Detalhes</a>
                </div>
              </div>
            </div>
      `;
      this.appendChild(div);
    }
  }
  
  customElements.define("componente-novo", Componente);
  