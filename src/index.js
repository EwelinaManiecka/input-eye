const visibilityBtn = document.getElementById("show");
const visibilityIcon = document.getElementById("hide");
const clickedIcon = document.getElementById("clicked-icon");

clickedIcon.addEventListener("click", toggleVisibility);

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

// const showPassword = document.querySelector("#show");
// const passwordField = document.querySelector("#password");

// showPassword.addEventListener("click", function() {
//     this.classList.toggle("fa-eye-slash");
//     const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
//     passwordField.setAttribute("type", type);
// })
