//Common functions
// Get Input Value
 function getInputValue(inputID){
    const inputElement = document.getElementById(inputID);
    const inputValue = inputElement.value;
    const inputAmount = parseFloat(inputValue);
    inputElement.value = "";
    return inputAmount;  
 };

// Deposit or Withdraw total amount
 function getTotalAmount(previousValueID, newAmount){
     const previousElement = document.getElementById(previousValueID);
     const previousValue = previousElement.innerText;
     const previousAmount = parseFloat(previousValue);
     const totalAmount = previousAmount + newAmount;
     
     previousElement.innerText = totalAmount;
     return previousElement;
 };
// Updated Total balance 
 function getTotalBalance(totalBalanceID, newAmount){
     const totalBalance = document.getElementById(totalBalanceID);
     const previousTotalBalance = totalBalance.innerText;
     const previousTotalAmount = parseFloat(previousTotalBalance);
     const updatedTotalBalance = previousTotalAmount + newAmount;
     totalBalance.innerText = updatedTotalBalance;
     return totalBalance;
 };
// Validate Input
function getErrorMessage(inputID, errorNotice){
    const inputText = document.getElementById(inputID);
    const inputBox = inputText.parentNode
    const errorMessage = document.createElement("p");
    errorMessage.className = "py-3 px-4 my-4 rounded bg-red-50";
    errorMessage.innerText = errorNotice;
    inputBox.prepend(errorMessage);
};
//Current Total balance
function getCurrentBalance(currentBalanceID){
    const totalBalance = document.getElementById(currentBalanceID);
    const previousTotalBalance = totalBalance.innerText;
    const previousTotalAmount = parseFloat(previousTotalBalance);
    return previousTotalAmount;
};

//Add Deposits 
document.getElementById('deposit-button').addEventListener('click', function(){
    //Total deposit
    const newDepositAmount = getInputValue('deposit-input');
    if(newDepositAmount > 0){
        getTotalAmount('deposit-total', newDepositAmount);
        //Total Balance
        getTotalBalance('balance-total', newDepositAmount);
    }else{
        getErrorMessage('deposit-input', 'Please enter a valid number!');
    }
    
});

//Add Withdraws
document.getElementById('withdraw-button').addEventListener('click', function(){
    //Total Withdraw
    const newWithdrawAmount = getInputValue('withdraw-input') ;
    if(newWithdrawAmount > 0 &&  newWithdrawAmount <= getCurrentBalance('balance-total')){
        getTotalAmount('withdraw-total', newWithdrawAmount);
        //Total Balance
        getTotalBalance('balance-total', -Math.abs(newWithdrawAmount));
    }
    else if(newWithdrawAmount >= getCurrentBalance('balance-total')){
        getErrorMessage('withdraw-input', "Sorry, you don\'t have sufficient balance");
    }
    else{
        getErrorMessage('withdraw-input', "Please enter a valid number!");
        //getErrorMessage('withdraw-input', 'Please enter a valid amount');
    }      
});