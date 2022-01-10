let comment=[];
function getback(){
    let query =JSON.parse(localStorage.getItem("Contact"));
    if(query){
        comment=query;
    
    }
}
 getback();
function contact(event){
event.preventDefault();
let name = document.getElementById("name").value;
console.log(name);
let email = document.getElementById("email").value;
console.log(email);
let mobile = document.getElementById("mobile").value;
let message = document.getElementById("comments").value;
let contact = {
    "Name":name,
    "Email":email,
    "Mobile":mobile,
    "Message":message

}
comment.push(contact);
alert('Received your Query');
localStorage.setItem("Contact",JSON.stringify(comment));
}


