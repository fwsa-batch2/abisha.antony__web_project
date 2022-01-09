let fullarr =[];
function onpageload(){
    let page=JSON.parse(localStorage.getItem("reviewer"));
    if(page!=null){
        fullarr=page;
    }
}
function review(){
    event.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("gmail").value;
    let ratings=document.getElementById("rating").value;
    let feedback=document.getElementById("feedback").value;
    let main=document.getElementById("text");
    main.style.fontSize="40px"
    const isexist=isuserexist(email)
    if(isexist){
        const reviewlist ={
            "name":name,
            "ratings":ratings,
            "feedback":feedback
        }
        fullarr.push(reviewlist);
        localStorage.setItem("reviewer",JSON.stringify(fullarr));
        main.innerText="Thank you for reviewing us"
    }
    else{
        alert("please use the registered email to review");
        return null;
    }
}
function isuserexist(paraemail){
    let isexist=false;
    const userdetails=JSON.parse(localStorage.getItem("user"));
    const len=userdetails.length;
    for(i=0;i<len;i++){
        const user=userdetails[i];
        const useremail=user.gmail;
        if(useremail==paraemail){
            isexist=true;
            break;
        }

    }
    return isexist;
}