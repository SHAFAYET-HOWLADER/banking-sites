
//get deposite button
document.getElementById("depositeBtn").addEventListener("click", function(){
    const depositeInputBox = document.getElementById("depositeInput");
    const depositeInputBoxValue = depositeInputBox.value;
    const depositeInnerText = document.getElementById("depoDollar");
    const depositeInnerValue = depositeInnerText.innerText;
    depositeInnerText.innerText = depositeInputBoxValue;
    const depositeTotalValue =parseFloat( depositeInnerValue) + parseFloat(depositeInputBoxValue);
    depositeInnerText.innerText = depositeTotalValue;
    depositeInputBox.value = " ";
    //update balance
    const balanceText = document.getElementById("balance");
    const balanceTextValue = balanceText.innerText;
    const balanceTextPreviousValue = parseFloat(balanceTextValue);
    balanceText.innerText = balanceTextPreviousValue + depositeTotalValue;
})

//get withdrawButton
document.getElementById("withdrwaBtn").addEventListener("click", function(){
    const withdrawInputBox = document.getElementById("withdrawInput");
    const withdrawInputValue = withdrawInputBox.value;
    const withdrawInnerText = document.getElementById("withdrawDollar");
    const withPreviousTotaInnerText = withdrawInnerText.innerText;
    withdrawInputBox.value = " ";
    const withdrawTotalInnerText =  parseFloat(withPreviousTotaInnerText) + parseFloat(withdrawInputValue);
    withdrawInnerText.innerText = withdrawTotalInnerText;
   //update balance
   const balanceText = document.getElementById("balance");
   const balanceTextValue = balanceText.innerText;
   const balanceTextPreviousValue = parseFloat(balanceTextValue);
   balanceText.innerText = balanceTextPreviousValue - withdrawTotalInnerText;
})






