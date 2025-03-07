export const fillSelect = (array, select) => {
    array.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.textContent = option;
        select.appendChild(optionElement);
    });
}