document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-fild');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

     
    depositField.value = ''

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
      

    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBlanceTotalString = balanceTotalElement.innerText;
    const previousBlanceTotalAmount = parseFloat(previousBlanceTotalString);


    const newBalenceTotal = previousBlanceTotalAmount + newDepositAmount;
    balanceTotalElement.innerText = newBalenceTotal;









})