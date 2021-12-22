let storeArr = [];
onPageLoad();
function onPageLoad() {
    console.group("onPageLoad");
    const users = JSON.parse(localStorage.getItem("user"));
    console.log(users);
    if(users != null){
    storeArr = users;
}
console.groupEnd("OnPageLoad");
}



function sign() {
    event.preventDefault();
    console.group("sign");
    let name = document.getElementById('username').value;
    let phno = document.getElementById('phnumber').value;
    let email = document.getElementById('email').value;
    let enterPass = document.getElementById('createpass').value;
    let confirmPass = document.getElementById('confirmpass').value;

   const emailexists = emailvalid(email);
   console.table(emailexists);

   if(enterPass != confirmPass){
       alert('passsword mismatched');
    
   } else if(emailexists) {
      alert("invalid email");
      return;
   } else{
    const userObj = {
        'Username': name,
        'phnumber': phno,
        'gmail': email,
        'enterpassword': enterPass,
        'confirmpassword': confirmPass
    }
    storeArr.push(userObj);
    let userlist =JSON.stringify(storeArr);
    localStorage.setItem("user",userlist);
    window.location.href="tq.html"

   }
   console.groupEnd("sign");
}
    

function emailvalid(currentemail){
    let userDetails=JSON.parse(localStorage.getItem("user"))
    let used = false;
    if(userDetails) {
    for(i=0;i<userDetails.length;i++){
        const userList=userDetails[i];
        const email = userList.gmail;
        if(currentemail == email ){
            used = true;
        }
    }
    return used;
}
}


