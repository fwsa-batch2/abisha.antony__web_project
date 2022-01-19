let add=[];
function onPageLoad(){
    const dance=JSON.parse(localStorage.getItem("details"));
    if(dance!=null){
        add=dance;
    }
}
function adding(event){
event.preventDefault();

let image = document.getElementById("img").value;
let sentence = document.getElementById("sentence").value;
let name = document.getElementById("name").value;
const newdancedetails = {
    "dancename":name,
    "coverimage":image,
    "coversentence":sentence
}
add.push(newdancedetails);

localStorage.setItem("details",JSON.stringify(add));
window.location.href="./added.html"

}
onPageLoad();