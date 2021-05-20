// for Submit button
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', function () {
  const loginArea = document.getElementById('login-area');
  loginArea.style.display = "none";
  const transactionArea = document.getElementById('transaction');
  transactionArea.style.display = 'block';
})

// for Deposit Button
const depositButton = document.getElementById('deposit-btn');
depositButton.addEventListener('click', function () {
  const depositNumber = getInputNumber('deposit-amount');

  updateSpanText('current-deposit', depositNumber);
  updateSpanText('current-balance', depositNumber);

  document.getElementById('deposit-amount').value = '';

})
function updateSpanText(id, depositNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const totalAmount = depositNumber + currentNumber;
  document.getElementById(id).innerText = totalAmount;

}

// for withdraw Button
const withdrawBtn = document.getElementById('withdraw-button');
withdrawBtn.addEventListener('click', function () {
 const withdrawNumber = getInputNumber('withdraw-amount');
  
 updateSpanText('current-withdraw', withdrawNumber);
 updateSpanText('current-balance', -1 * withdrawNumber);

 document.getElementById('withdraw-amount').value = '';
})

function getInputNumber(id){
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;
}
