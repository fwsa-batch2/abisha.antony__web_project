function login(event){
    event.preventDefault();
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    const num=isuserexist(email,password);
    if(num){
        localStorage.setItem("loggedinuser",email)
        window.location.href="../../index.html";
    }
    else{
        alert("invalid email or password");
        return null;
    }

}
function isuserexist(paramemail,parampassword){
let num=false;
const userdetails=JSON.parse(localStorage.getItem("user"));
let i;
for( i=0;i< userdetails.length;i++){
    const user=userdetails[i];
    const useremail=user.gmail;
    const userpassword=user.enterpassword;
    if(useremail==paramemail&&userpassword==parampassword){
        num=true;
        break;
    }
}
return num;
}
