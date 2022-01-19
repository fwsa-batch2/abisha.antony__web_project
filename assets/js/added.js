
const newdance = JSON.parse(localStorage.getItem("details"));
function onPageLoad(){
    if(newdance==null){
        document.getElementById("new").innerText="Your list is empty"
    }
    else{
newdance.forEach(list);
    
    }
}
onPageLoad();
function list(item){
document.getElementById("new").innerHTML+=`<div>dance name:${item.dancename}</div>
<div> Cover sentence:${item.coversentence}</div>
<div>Cover image:<img src="${item.coverimage} "  class  ="img" alt=" style="height:20px">`
}