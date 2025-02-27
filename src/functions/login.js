import { avatar, loginButton, sections } from "../components/navbar";

export let loginState = false;
export const loginFun = () => {
    if (loginState) {
        loginState = false;
        sections.appendChild(loginButton)
        sections.removeChild(avatar)
    } else {
        loginState = true;
        sections.appendChild(avatar)
        sections.removeChild(loginButton)
    }
}