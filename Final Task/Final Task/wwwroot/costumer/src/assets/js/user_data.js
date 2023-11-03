
let userLogin = document.querySelector(".userLogin a");
var loggeduser = JSON.parse(sessionStorage.getItem("user"));
var logout = document.querySelector(".logOut");
var groupClass = document.querySelector(".group");

let cardOfLogin = document.querySelector(".card-mine");

if (loggeduser && loggeduser.name) {
    userLogin.textContent = `Hello ,${loggeduser.name}`;
}



