// step-1
document.getElementById('btn-Withdraw').addEventListener('click', function(){
    // step-2
    const withdrawField= document.getElementById('withdraw-field');
    const newWithdrawAmount= parseFloat(withdrawField.value);
    
    // step-3 clear withdrawField 
    withdrawField.value= '';
    
    // step-4
    const withdrawTotalElement= document.getElementById('withdraw-total');
    const previousWithdrawAmount= parseFloat(withdrawTotalElement.innerText);
    
    // step-5 calculation (newWithdrawAmount + previousWithdrawAmount) then set up
    const currentWithdrawAmount= newWithdrawAmount + previousWithdrawAmount;
    withdrawTotalElement.innerText= currentWithdrawAmount;
    
    // ------------------withdraw with balanceTotal part--------------------------
    // step-6
    const balanceTotalElement= document.getElementById('balance-total');
    const previousBalanceAmount= parseFloat(balanceTotalElement.innerText);
    
    // step-7 calculation (previousBalanceAmount - newWithdrawAmount) then setup
    const currentBalanceAmount= previousBalanceAmount - newWithdrawAmount;
    balanceTotalElement.innerText= currentBalanceAmount;
    
    })