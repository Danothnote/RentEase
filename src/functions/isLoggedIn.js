import { addUser } from "./navbar/addUser";

export const isLoggedIn = () => {
    if (localStorage.getItem("auth")) {
        const user = JSON.parse(localStorage.getItem("auth"));
        addUser(user);
        return true;
    } else {
        return false;
    }
}