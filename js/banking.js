
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
document.getElementById("")






