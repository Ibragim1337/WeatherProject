
document.addEventListener('DOMContentLoaded', function() {
    const login = document.querySelector('.login');
    const password = document.querySelector('.password');
    const confirm = document.querySelector('.confirm');
    const btn = document.querySelector('.btn');
    const error = document.querySelector('.error-message');
    const userName = document.querySelector('.login').value;
    const userPassword = document.querySelector('.password').value;


    btn.addEventListener('click', (event) => {
        event.preventDefault();

        if (login.value === '' || password.value === '') {
            error.textContent = 'Please enter both login and password.';
        }
        else if(password.value !== confirm.value){
            error.textContent = 'Password mismatch'
        }
        else if (password.value === confirm.value){
            window.location.href = 'signin.html';
        }
    });

    const existingUser = JSONsparse(localStorage.getItem('user')) || [];

    const isUserExist = existingUser.some((user) => user.name === userName);
    if(isUserExist){
        alert('User Already Exist')
    }

    const user = {
        name: userName,
        password: userPassword
    }

    existingUser.push(user);

    localStorage.setItem('user', JSON.stringify(user));
});

// localStorage.clear();