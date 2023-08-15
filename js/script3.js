document.getElementById('btn-withdrow').addEventListener('click', function(){
    const widthrowFild = document.getElementById('Withdrow-fild');
    const newWidthrowAmountString = widthrowFild.value;
    const newWidthrowAmount = parseFloat(newWidthrowAmountString);

    widthrowFild.value = '';


    const withdrowTotalElement = document.getElementById('Withdrow-total');
    const previousWithdrowTotalString = withdrowTotalElement.innerText;
    const previousWithdrowTotal = parseInt(previousWithdrowTotalString);

    const newWidthrowTotal = previousWithdrowTotal + newWidthrowAmount;
    withdrowTotalElement.innerText = newWidthrowTotal;


    const balanceTotalElement = document.getElementById('balance-total');
    const previousBlanceTotalString = balanceTotalElement.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceTotalString);

    const newBalanceTotal = previousBlanceTotal - newWidthrowAmount;
    balanceTotalElement.innerText = newBalanceTotal


})