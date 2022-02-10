
//submit event
document.getElementById("submit").addEventListener("click", function(){
    const emailInput = document.getElementById("emailBox");
    console.log(emailInput.value);
    const  passInput = document.getElementById("passBox");
    console.log(passInput.value);
   if((emailInput == "safayethowlader96@gmail.com") && (passInput == 00000)){
       window.location.href = "banking.html";
   }
})