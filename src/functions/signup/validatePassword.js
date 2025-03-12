import { signupStrings } from "../../model/signup/signupStrings";

export const validatePassword = () => {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    password.length >= 8 ? document.getElementById("minLength").style.color = "green" : document.getElementById("minLength").style.color = "red";
    password.match(/[A-Z]/) ? document.getElementById("hasUppercase").style.color = "green" : document.getElementById("hasUppercase").style.color = "red";
    password.match(/[a-z]/) ? document.getElementById("hasLowercase").style.color = "green" : document.getElementById("hasLowercase").style.color = "red";
    password.match(/[1-9]/) ? document.getElementById("hasNumber").style.color = "green" : document.getElementById("hasNumber").style.color = "red";
    password.match(/[!@#$%^&*()_+[\]{};:'"<>,.?~\\/-]/) ? document.getElementById("hasSpecialChar").style.color = "green" : document.getElementById("hasSpecialChar").style.color = "red";
    !password.match(/[\s]/) ? document.getElementById("hasSpaces").style.color = "green" : document.getElementById("hasSpaces").style.color = "red";
    password === confirmPassword ? document.getElementById("samePassword").style.color = "green": document.getElementById("samePassword").style.color = "red";
    for (let element of document.getElementsByClassName("formValidation")) {
        if (element.style.color === "red") {
            signupStrings.right[1].valid = false;
            signupStrings.right[2].valid = false;
        } else {
            signupStrings.right[1].valid = true;
            signupStrings.right[2].valid = true;
        }
    }
}