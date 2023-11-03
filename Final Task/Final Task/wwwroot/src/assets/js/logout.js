
let logoutbtn = document.querySelector(".logout");
let lgout = document.getElementById("lgout");

if (loggeduser && loggeduser.name) {
    logout.classList.remove("unactive");

    logoutbtn.addEventListener("click", function () {
        let logginOut = sessionStorage.removeItem("user");
        window.location.href = "/index.html";
    })
    groupClass.classList.add("unactive");

    let userCardHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-text">User:${loggeduser.name}</h5>
                <h5 class="card-text">Phone:${loggeduser.password}</h5>
            </div>
        </div>`;
    lgout.innerHTML = userCardHTML;

}
