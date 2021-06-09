/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
// const cart = new Cart([]);
const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
const cart = new Cart(cartItems);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    const listOption = document.createElement('option');
    listOption.textContent = Product.allProducts[i].name;
    selectElement.appendChild(listOption);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart(event.target);
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview(event.target);

  event.target.reset();
}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart(target) {
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
  cart.addItem(target.items.value, target.quantity.value);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  document.getElementById('itemCount').textContent = `${cart.items.length}`;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview(target) {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  
  const cartContents = document.getElementById('cartContents');
  const itemsList = document.createElement('ul');
  const listItem1 = document.createElement('li');
  const listItem2 = document.createElement('li');

  listItem1.textContent = target.items.value;
  listItem2.textContent = target.quantity.value;

  itemsList.appendChild(listItem1);
  itemsList.appendChild(listItem2);
  cartContents.appendChild(itemsList);
}


// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
