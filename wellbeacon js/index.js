// password
var eye = document.querySelector(".eye");
var passwordInput = document.querySelector("#password");

eye.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
});
// hambuger

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const loginContent = document.querySelector('.login-content');

    hamburger.addEventListener('click', function () {
        // Toggle the 'active' class on the hamburger
        hamburger.classList.toggle('active');

        // Toggle the visibility of the login content
        loginContent.classList.toggle('active');
    });
});