document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Get the form elements
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');

    // Reset error messages
    emailError.textContent = '';
    passwordError.textContent = '';
    emailError.style.display = 'none';
    passwordError.style.display = 'none';

    // Flag to track if form is valid
    var formIsValid = true;

    // Email validation
    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        emailError.style.display = 'block';
        formIsValid = false;
    } else if (!validateEmail(email.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
        formIsValid = false;
    }

    // Password validation
    if (password.value.trim() === '') {
        passwordError.textContent = 'Password is required.';
        passwordError.style.display = 'block';
        formIsValid = false;
    }

    // If form is not valid, prevent submission
    if (!formIsValid) {
        event.preventDefault();
    }
});

// Helper function to validate email format
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Password toggle function
function togglePassword() {
    var password = document.getElementById('password');
    var toggleIcon = document.getElementById('toggleIcon');

    if (password.type === 'password') {
        password.type = 'text';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    } else {
        password.type = 'password';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    }
}
