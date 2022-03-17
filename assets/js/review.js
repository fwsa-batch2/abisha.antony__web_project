//global variables ? yes ? Can we reduce the scope of the global variable ?

// Variable name are meaningul ?
// Naming Convention - Variable, Function, onPageLoad

let reviewList = [];
function onpageload() {
    let page = JSON.parse(localStorage.getItem("reviewer"));
    if (page != null) {
        reviewList = page;
    }
}
/**
 * This function used to add review  => addReview(event)
 * @param {*} event 
 * @returns 
 */
function review(event) {
    event.preventDefault();

    //1. Get Form Values

    const name = document.getElementById("name").value; //Redceu the scope
    let email = document.getElementById("gmail").value; //email
    let ratings = document.getElementById("rate").value; //rating
    let feedback = document.getElementById("feedback").value;
    let main = document.getElementById("text"); // "text" generic id

    // "main" - use meaningful variable name


    // main.style.fontSize = "40px"
    //2. Validation
    const isexist = isuserexist(email)
    if (isexist) {
        // 3. Store data to LocalStorage

        // const reviewObj = {};  
        // const reviewList = [];
        // Variable name is misleading datatypes
        const reviewlist = {
            "name": name,
            "ratings": ratings,
            "feedback": feedback
        }
        reviewList.push(reviewlist);

        //todo: The below stores only last review comments, but it store all review comments
        localStorage.setItem("reviewer", JSON.stringify(reviewList)); // localStorage.setItem(key,value); Key => meaningful

        //Scenario: 5 times, user is posting reviews => [1,2,3,4,5]

        //

        //4. Notify User
        alert("Thank you for reviewing us")

        //5. Go to next page
        window.location.href = "../../index.html";
    }
    else {
        // Failure Scenario -
        // Meaningful Error Message => 40-50 hrs => So that people using your UI will be able to correct the fields
        alert("please use the registered email to review");
        return null;

    }
}
function isuserexist(paraemail) {
    let isexist = false;
    const userdetails = JSON.parse(localStorage.getItem("user"));

    //foreach loop or enhanced for loop
    //for(const user: userdetails) { } //without using temporary vaiable "i"
    let i;
    for (i = 0; i < userdetails.length; i++) {
        const user = userdetails[i];
        const useremail = user.gmail;
        if (useremail == paraemail) { // spell check
            isexist = true;
            break;
        }

    }
    return isexist;
}

function listReview() {
    const getFromLs = JSON.parse(localStorage.getItem('reviewer'));
    let i;

    let content = "";
    for (i = 0; i < getFromLs.length; i++) {

        content += ` <br>Name: ${getFromLs[i].name} <br> Rating: ${getFromLs[i].ratings} <br> Feedback: ${getFromLs[i].feedback} <br> `
    }
    document.getElementById('review-div').innerHTML = content; // fast =>
}
