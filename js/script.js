
//submit event
document.getElementById("submit").addEventListener("click", function(){
    const emailInput = document.getElementById("emailBox");
    const userEmail = emailInput.value;
    const  passInput = document.getElementById("passBox");
    const userPassword =     passInput.value;
   if((userEmail == "safayethowlader96@gmail.com") && (userPassword =="s1a2f3a4")){
      window.location.href = "banking.html";
   }
})

