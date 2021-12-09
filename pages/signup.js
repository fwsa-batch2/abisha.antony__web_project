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



    const userObj = {
        'Username': name,
        'phnumber': phno,
        'gmail': email,
        'enterpassword': enterPass,
        'confirmpassword': confirmPass
    }


      let mailid = validid(email);
         if (mailid) {
        alert('email id already exist');
        return;

    }



      let isMatch = passwordchecking();

    if (isMatch) {
        storeArr.push(userObj);
        let objDetail = JSON.stringify(storeArr)
        localStorage.setItem('list', objDetail);
        window.location.href = "tq.html";
    }
    else {
        alert('Passwords do not match');
    }

}

  function passwordchecking() {

    let enterPass = document.getElementById("createpass").value;
    let confirmPass = document.getElementById("confirmpass").value;


    if (enterPass == confirmPass) {
        console.log("password matched")
        return true;
    }
    else {
        return false;
    }
}

function validid(current_mail){

let mailId = JSON.parse(localStorage.getItem("list"));
let used = false;

for (i = 0; i < user.length; i++) {
    let userlist = user[i];
    let email = userlist.email;

    if (current_mail == email) {
        user = true;
        break;
    }
        return used;

    }
}



onPageLoad();


