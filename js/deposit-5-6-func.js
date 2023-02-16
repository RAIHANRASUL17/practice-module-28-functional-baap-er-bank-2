// step-1
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2
    const depositField= document.getElementById('deposit-field');
    const newDepositAmount= parseFloat(depositField.value);
   
    // step-3 clear depositField
    depositField.value= '';

    // step-4
    const depositTotalElement= document.getElementById('deposit-total');
    const previousDepositAmount= parseFloat(depositTotalElement.innerText);

    // step-5 calculation (newDepositAmount + previousDepositAmount) then set up
    const currentDepositAmount= newDepositAmount + previousDepositAmount;

    depositTotalElement.innerText= currentDepositAmount;

    //-------------------Deposit with Balance------------
    // step-6
    const balanceTotalElement= document.getElementById('balance-total');
    const previousBalanceAmount= parseFloat(balanceTotalElement.innerText);
    
    // step-7 calculation (newDepositAmount + previousBalanceAmount) then set up
    const currentBalanceAmount= newDepositAmount + previousBalanceAmount;

    balanceTotalElement.innerText= currentBalanceAmount;
   
})