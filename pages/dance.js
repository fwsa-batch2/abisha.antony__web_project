function form(){
if(document.getElementById("hiphop").checked){

    document.getElementById("abisha").innerHTML=document.getElementById("hiphop").value+"radio button is checked"
}
else if(document.getElementById("salsa").checked){
    document.getElementById("haiden").innerHTML=document.getElementById("salsa").value+"radio button is checked"
}
else if(document.getElementById("garba").checked){
    document.getElementById("gvm").innerHTML=document.getElementById("garba").value+"radio button is checked"
}
}