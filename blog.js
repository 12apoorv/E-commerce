// Selectors
const navbar = document.getElementById('navbar');
const blogBoxes = document.querySelectorAll('.blog-box');
const paginationLinks = document.querySelectorAll('#pagination a');
const newsletterForm = document.querySelector('.form');
const newsletterInput = document.querySelector('input[type="text"]');
const newsletterButton = document.querySelector('.normal');

// Functions
function toggleNavbar() {
  navbar.classList.toggle('active');
}

function showBlogBox(index) {
  blogBoxes.forEach((box, i) => {
    if (i === index) {
      box.style.display = 'block';
    } else {
      box.style.display = 'none';
    }
  });
}

function submitNewsletterForm() {
  const email = newsletterInput.value;
  // Add email to newsletter list
  console.log(`Email added to newsletter list: ${email}`);
  newsletterInput.value = '';
}

// Event Listeners
navbar.addEventListener('click', toggleNavbar);
paginationLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    showBlogBox(index);
  });
});
newsletterButton.addEventListener('click', submitNewsletterForm);