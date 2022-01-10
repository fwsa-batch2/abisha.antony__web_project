let a = localStorage.getItem("reviewer");
let b =JSON.parse(a);
let c = "";
for(i=0;i<b.length;i++){
    c+="name"+b[i].name+"<br>"+
    "ratings"+b[i].ratings+"<br>"+
    "feedback"+b[i].feedback+"<br>"+"<hr>";

}
document.getElementById("enter").innerHTML=c;