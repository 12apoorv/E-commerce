// Selectors
const form = document.getElementById('form-details').querySelector('form');
const nameLabel = form.querySelector('input[type="text"][placeholder="Your Name"]');
const emailLabel = form.querySelector('input[type="text"][placeholder="E-mail"]');
const subjectLabel = form.querySelector('input[type="text"][placeholder="Subjects"]');
const messageLabel = form.querySelector('textarea');
const submitButton = form.querySelector('button.normal');

// Functions
function validateForm() {
  const name = nameLabel.value.trim();
  const email = emailLabel.value.trim();
  const subject = subjectLabel.value.trim();
  const message = messageLabel.value.trim();

  if (name === '' || email === '' || subject === '' || message === '') {
    alert('Please fill in all fields');
    return false;
  }

  if (!validateEmail(email)) {
    alert('Invalid email address');
    return false;
  }

  return true;
}

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function submitForm() {
  if (validateForm()) {
    // Send form data to server or perform other actions
    alert('Form submitted successfully!');
  }
}

// Event Listeners
submitButton.addEventListener('click', submitForm);