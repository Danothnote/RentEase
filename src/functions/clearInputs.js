export const clearInputs = () => {
    const elements = document.getElementsByClassName("formInput");
    for (let i = 0; i < elements.length; i++) {
        elements[i].value = "";
    }
}