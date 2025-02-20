/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  document.querySelector('tbody').innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

  const tbody = document.querySelector('tbody');
  for(let i = 0; i < cart.items.length; i ++){
    const tableRow = document.createElement('tr');

    
    const deleteLink = document.createElement('td');
    const quantity = document.createElement('td');
    const item =  document.createElement('td');

    deleteLink.textContent = 'X';
    deleteLink.classList.add('delete-link')
    deleteLink.id = i;
    quantity.textContent = cart.items[i].quantity;
    item.textContent = cart.items[i].product;
    
    tableRow.appendChild(deleteLink);
    tableRow.appendChild(quantity);
    tableRow.appendChild(item);
    
    tbody.appendChild(tableRow);
  }

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  // document.querySelector('cart').classList.contains;
  if(event.target.classList.contains('delete-link')){
    cart.removeItem(cart.items[event.target.id]);
    cart.saveToLocalStorage();
    renderCart();
  }
}

// This will initialize the page and draw the cart on screen
renderCart();
