const visibilityBtn = document.getElementById("show");
const visibilityIcon = document.getElementById("hide");
visibilityBtn.addEventListener("click", toggleVisibility);
function toggleVisibility() {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        document.getElementById("hide").style.display = "inline-block";
        document.getElementById("show").style.display = "none";
    } else {
        passwordInput.type = "password";
        document.getElementById("hide").style.display = "none";
        document.getElementById("show").style.display = "inline-block";
    }
}

//# sourceMappingURL=index.579125c3.js.map
