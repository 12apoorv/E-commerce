// Select all the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add a click event listener to each button
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the product information from the button's parent element
    const product = button.parentElement.parentElement;
    const title = product.querySelector('.product-title').innerText;
    const price = product.querySelector('.price').innerText;

    // Add the product to the cart
    addToCart(title, price);
  });
});

// Function to add a product to the cart
function addToCart(title, price) {
  // Create a new cart item
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');

  // Set the cart item's content
  cartItem.innerHTML = `
    <img src="image/cart-icon.png" alt="Cart Icon">
    <div class="cart-item-details">
      <div class="cart-item-title">${title}</div>
      <div class="cart-item-price">${price}</div>
    </div>
  `;

  // Add the cart item to the cart
  const cart = document.querySelector('.cart');
  cart.appendChild(cartItem);
}