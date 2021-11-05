// Login button event handler
const signIn = document.getElementById('signin');
signIn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area')
     loginArea.style.display = 'none'
     const transection = document.getElementById('Transection-area');
     transection.style.display = 'block';
})

// Deposit button event handler
const depositAction = document.getElementById('depositBtn');
depositAction.addEventListener('click', function () {
    console.log('clicked is working');
})