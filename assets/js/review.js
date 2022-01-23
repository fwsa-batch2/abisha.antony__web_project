let fullarr = [];
function onpageload() {
    let page = JSON.parse(localStorage.getItem("reviewer"));
    if (page != null) {
        fullarr = page;
    }
}
function review(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("gmail").value;
    let ratings = document.getElementById("rate").value;
    let feedback = document.getElementById("feedback").value;
    let main = document.getElementById("text");
    main.style.fontSize = "40px"
    const isexist = isuserexist(email)
    if (isexist) {
        const reviewlist = {
            "name": name,
            "ratings": ratings,
            "feedback": feedback
        }
        fullarr.push(reviewlist);
        localStorage.setItem("reviewer", JSON.stringify(fullarr));
        alert("Thank you for reviewing us")
        window.location.href = "../../index.html";
    }
    else {
        alert("please use the registered email to review");
        return null;

    }
}
function isuserexist(paraemail) {
    let isexist = false;
    const userdetails = JSON.parse(localStorage.getItem("user"));

    let i;
    for (i = 0; i < userdetails.length; i++) {
        const user = userdetails[i];
        const useremail = user.gmail;
        if (useremail == paraemail) {
            isexist = true;
            break;
        }

    }
    return isexist;
}

function listReview() {
    const getFromLs = JSON.parse(localStorage.getItem('reviewer'));
    let i;

    for (i = 0; i < getFromLs.length; i++) {

        document.getElementById('review-div').innerHTML += ` <br>Name: ${getFromLs[i].name} <br> Rating: ${getFromLs[i].ratings} <br> Feedback: ${getFromLs[i].feedback} <br> `
    }
}
