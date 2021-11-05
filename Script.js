// Login button event handler
const signIn = document.getElementById('signin');
signIn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area')
     loginArea.style.display = 'none'
     const transection = document.getElementById('Transection-area');
     transection.style.display = 'block';
})

// Deposit button event handler
// const depositBtn = document.getElementById('depositBtn');
// depositBtn.addEventListener('click', function () {
//     const depositAmount = document.getElementById('depositAmount').value;
//     const depositNumber = parseFloat(depositAmount);

//     const currentDeposit = document.getElementById('currentDeposit').innerText;
//     const currentDepositNumber = parseFloat(currentDeposit);
//     const totalDeposit = depositNumber + currentDepositNumber;
//     document.getElementById(currentDeposit).innerText = totalDeposit;
// })

const depositBtn = document.getElementById('depositBtn');
const depositAction =  ('click', function () {
    const depositAmount = document.getElementById('inputDeposit').value;
    const depositNumber = parseFloat(depositAmount);

    const currentAmount = getElementById('currentAmount').innerText;
    const currentNumber = parseFloat(currentAmount);
    const showAmount = depositNumber + currentAmount;
    
    document.getElementById('currentAmount').innerText = showAmount;
    document.getElementById('inputDeposit').value = "";

    const currentBalance = document.getElementById('currentBalance').innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = currentBalanceNumber +showAmount;
    document.getElementById('currentBalance').innerText = totalBalance;
    
})