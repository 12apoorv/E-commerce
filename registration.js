document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Additional validation logic can be added here

    // Submit the form or perform further actions
    alert('Registration form submitted successfully!');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform login logic here
    alert('Login form submitted!');
});
