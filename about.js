// Selectors
const navbar = document.getElementById('navbar');
const cartIcon = document.querySelector('.fa-shopping-bag');
const video = document.querySelector('video');
const newsletterForm = document.querySelector('.form');
const newsletterInput = document.querySelector('input[type="text"]');
const newsletterButton = document.querySelector('.normal');

// Functions
function toggleNavbar() {
  navbar.classList.toggle('active');
}

function playVideo() {
  video.play();
}

function pauseVideo() {
  video.pause();
}

function submitNewsletterForm() {
  const email = newsletterInput.value;
  // Add email to newsletter list
  console.log(`Email added to newsletter list: ${email}`);
  newsletterInput.value = '';
}

// Event Listeners
cartIcon.addEventListener('click', toggleNavbar);
video.addEventListener('mouseover', playVideo);
video.addEventListener('mouseout', pauseVideo);
newsletterButton.addEventListener('click', submitNewsletterForm);