let storeArr = [];

function onPageLoad() {
    const users = JSON.parse(localStorage.getItem("list"));
    if(users!=null){
    storeArr = users;
}
}



function sign() {
    event.preventDefault();
    let name = document.getElementById('username').value;
    let phno = document.getElementById('phnumber').value;
    let email = document.getElementById('email').value;
    let enterPass = document.getElementById('createpass').value;
    let confirmPass = document.getElementById('confirmpass').value;

   const emailexists = emailvalid(email);

   if(enterPass != confirmPass){
       alert('passsword mismatched');
   }
   else if(emailexists) {
      alert("invalid email");
   }
   else{
    const userObj = {
        'Username': name,
        'phnumber': phno,
        'gmail': email,
        'enterpassword': enterPass,
        'confirmpassword': confirmPass
    }
    storeArr.push(userObj);
    let userlist =JSON.stringify(storeArr);
    localStorage.setItem("key",userlist);
    window.location.href="tq.html"

   }
}

function emailvalid(currentemail){
    let used = false;
    for(i=0;i<storeArr.length;i++){
        const email = storeArr[i].gmail;
        if(currentemail == email ){
            used = true;
        }
    }
    return used;
}

 




onPageLoad();


ih;;;;;