export const verifyLoggedState = () => {
    if (localStorage.getItem("auth")) {
        return true;
    } else {
        return false;
    }
}