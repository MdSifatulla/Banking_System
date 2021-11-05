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
    // const currentMoney = document.getElementById('depositAmount').innerText;
    // const currentNumber = parseFloat(currentMoney);
    // const showAmount = depositNumber + currentNumber;
    
    // document.getElementById('depositAmount').innerText = showAmount;
    // document.getElementById('inputDeposit').value = "";

    // const currentBalance = document.getElementById('currentBalance').innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = currentBalanceNumber + showAmount
    // document.getElementById('currentBalance').innerText = totalBalance;
    span_Text('depositAmount', depositNumber);
    span_Text('currentBalance', depositNumber )
    document.getElementById('inputDeposit').value = "";
})
// Withdraw Event Handler
const withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click', function(){
    const withdrawValue1 = getInputNumber('withdrawInput')
    
    span_Text('displayWithdrawAmount', withdrawValue1);
    span_Text('currentBalance', -1 * withdrawValue1);
})

function getInputNumber() {
    const withdrawInput = document.getElementById('withdrawInput').value;
    const withdrawValue = parseFloat(withdrawInput);
    return withdrawValue;
}
function span_Text(id, depositNumber) {
    const currentMoney = document.getElementById(id).innerText;
    const currentNumber = parseFloat(currentMoney);
    const totalBalance = depositNumber + currentNumber;
    
    document.getElementById(id).innerText = totalBalance;
}
