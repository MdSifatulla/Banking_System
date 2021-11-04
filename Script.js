const signIn = document.getElementById('signin');
signIn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area')
     loginArea.style.display = 'none'
     const transection = document.getElementById('Transection-area');
     transection.style.display = 'block';
})