let productContainer = document.querySelector(".product__item__container");

fetch('http://localhost:9270/products').then(product => product.json()).then(json =>

    json.forEach(element => {

        // console.log(element.title);
            productContainer.innerHTML += `
           <div class="product__item border rounded p-4 position-relative">
           <button class="productItemRemove"><i class="border rounded fas fa-times"></i></button>
                               <div class="product__image">
                                   <img src="${element.image}">
                               </div>
                               <div class="product__desc">
                                   <span class="product__category">${element.category}</span>
                                   <h5 class="product__title">${element.title}</h5>
                                   <p class="product__vendor text-muted">
                                       By <span class="">None</span>
                                   </p>
                                   <div class="product__cardBottom d-flex justify-content-between align-items-center">
                                       <div class="product__price">
                                           <span class="sale__price">$${element.salePrice}</span>
                                           <span class="sale__regular text-decoration-line-through">$${element.regularPrice}</span>
                                       </div>
                                       <div class="add__toCart">
                                           <i class="fas fa-shopping-cart"></i> Add
                                       </div>
                                   </div>
                               </div>
                           </div>
           `;


    }))