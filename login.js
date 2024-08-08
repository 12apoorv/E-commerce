document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Add validation or authentication logic here
    // For example, making an API call to your backend to verify credentials

    // For now, we'll just alert the email and password entered
    if (email && password) {
        alert('Login successful!\nEmail: ' + email + '\nPassword: ' + password);
    } else {
        alert('Please fill out both fields.');
    }
});