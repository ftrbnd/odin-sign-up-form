const enterPassword = document.querySelector('input#pass');
const confirmPassword = document.querySelector('input#confirmpass');
const createAccountButton = document.querySelector('button#create');

confirmPassword.addEventListener('input', (event) => {
    if (confirmPassword.value != enterPassword.value) {
        confirmPassword.setCustomValidity('Passwords do not match.');
    } else {
        confirmPassword.setCustomValidity('');
    }
});