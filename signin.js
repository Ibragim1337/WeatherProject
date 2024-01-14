//sign in logic

document.addEventListener('DOMContentLoaded', function() {
    const login = document.querySelector('.login');
    const password = document.querySelector('.password');
    const btn = document.querySelector('.btn');
    const error = document.querySelector('.error-message');

    btn.addEventListener('click', (event) => {
        event.preventDefault();

        if (login.value === '' || password.value === '') {
            error.textContent = 'Please enter both login and password.';
        } else {
            window.location.href = 'wheather/wheather.html';
        }
    });
});