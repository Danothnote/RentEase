import { navBarModel } from "../../model/navbar/navbarModel";

export const changeLogged = (isLoggedIn) => {
    if (isLoggedIn) {
        document.getElementById(navBarModel.userDiv.id).style.display = "flex";
        document.getElementById(navBarModel.pages[2].id).style.display = "inline";
        document.getElementById(navBarModel.loginButton.id).style.display = "none";
    } else {
        document.getElementById(navBarModel.userDiv.id).style.display = "none";
        document.getElementById(navBarModel.pages[2].id).style.display = "none";
        document.getElementById(navBarModel.loginButton.id).style.display = "inline";
    }
}