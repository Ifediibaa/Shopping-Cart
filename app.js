'use strict'

let cart =[];
const cartDOM = document.querySelector('.cart')
const addToCartButtonsDOM = document.querySelectorAll('[data-action="ADD_TO_CART"]');
addToCartButtonsDOM.forEach(addToCartButtonDOM => {
 addToCartButtonDOM.addEventListener('click', () => {
    const productDOM = addToCartButtonDOM.parentNode;
    const product = {
        image: productDOM.querySelector('.image').getAttribute('src'),
        name:  productDOM.querySelector('.name').innerText,
        price: productDOM.querySelector('.price').innerText,

    };
    // console.log(product)
    cartDOM.insertAdjacentHTML('beforeend', `
    <div class="cart_item">
    <img class="cart_item_img" src="${product.image}">
    <h3 class="cart_item_name">${product.name}</h3>
    <h3 class="cart_item_price">${product.price}</h3>
    
    
    </div> 
    `);
    
    cart.push(product);
    console.table(product)

  });
    
});
