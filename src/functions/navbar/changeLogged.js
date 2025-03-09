import { isLoggedIn } from "../isLoggedIn"

export const changeLogged = () => {
    if (isLoggedIn()) {
        document.getElementById("avatar").style.display = "block";
        document.getElementById("newFlatLink").style.display = "block";
        document.getElementById("loginButton").style.display = "none";
    } else {
        document.getElementById("avatar").style.display = "none";
        document.getElementById("newFlatLink").style.display = "none";
        document.getElementById("loginButton").style.display = "block";
    }
}