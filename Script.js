// Login button event handler
const signIn = document.getElementById('signin');
signIn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area')
     loginArea.style.display = 'none'
     const transection = document.getElementById('Transection-area');
     transection.style.display = 'block';
})

// Deposit button event handler
const depositBtn = document.getElementById('depositBtn');
depositBtn.addEventListener('click', function () {
    const depositAmount = document.getElementById('inputDeposit').value;
    const depositNumber = parseFloat(depositAmount);
    console.log('click is working')

    const currentMoney = document.getElementById('depositAmount').innerText;
    const currentNumber = parseFloat(currentMoney);
    const showAmount = depositNumber + currentNumber;
    
    document.getElementById('depositAmount').innerText = showAmount;
    document.getElementById('inputDeposit').value = "";

    const currentBalance = document.getElementById('currentBalance').innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = currentBalanceNumber + showAmount
    document.getElementById('currentBalance').innerText = totalBalance;
    
})