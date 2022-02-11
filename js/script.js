
//get login 
document.getElementById("submit").addEventListener("click", function(){
    const userEmail = document.getElementById("emailBox");
    const userEmailValue = userEmail.value;
    const userpassword = document.getElementById("passBox");
    const userPasswordValue = userpassword.value;
    if(( userEmailValue == "safayethowlader96@gmail.com") && ( userPasswordValue == "s1a2f3a4")){
          window.location.href = "banking.html";
    }
})
