const loggedInUser = JSON.parse(localStorage.getItem("loggedinuser"))


if(loggedInUser === null){
    window.location.href= "./../../pages/login.html"
}
