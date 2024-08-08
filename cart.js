// Selectors
const cartTable = document.getElementById('cart');
const cartRows = cartTable.querySelectorAll('tbody tr');
const coupanInput = document.getElementById('coupan').querySelector('input');
const coupanButton = document.getElementById('coupan').querySelector('button');
const subtotalTable = document.getElementById('subtotal').querySelector('table');
const subtotalRows = subtotalTable.querySelectorAll('tr');
const checkoutButton = document.getElementById('subtotal').querySelector('button');

// Functions
function updateSubtotal() {
  let subtotal = 0;
  cartRows.forEach((row) => {
    const price = parseFloat(row.cells[3].textContent);
    const quantity = parseInt(row.cells[4].querySelector('input').value);
    subtotal += price * quantity;
  });
  subtotalRows[0].cells[1].textContent = `$${subtotal.toFixed(2)}`;
  subtotalRows[2].cells[1].textContent = `$${subtotal.toFixed(2)}`;
}

function applyCoupan() {
  const coupanCode = coupanInput.value.trim();
  if (coupanCode === 'MYCOUPAN') {
    const discount = 0.1; // 10% discount
    let subtotal = parseFloat(subtotalRows[0].cells[1].textContent.replace('$', ''));
    subtotal *= (1 - discount);
    subtotalRows[0].cells[1].textContent = `$${subtotal.toFixed(2)}`;
    subtotalRows[2].cells[1].textContent = `$${subtotal.toFixed(2)}`;
  } else {
    alert('Invalid coupan code');
  }
}

// Event Listeners
cartRows.forEach((row) => {
  row.cells[4].querySelector('input').addEventListener('input', updateSubtotal);
});
coupanButton.addEventListener('click', applyCoupan);
checkoutButton.addEventListener('click', () => {
  alert('Proceeding to checkout...');
});