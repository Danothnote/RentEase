export const validationDiv = (validationMessages) => {
    const validationDiv = document.createElement("div");
    validationDiv.className = "validationDiv";
    
    for (const element of validationMessages) {
        const message = document.createElement("p");
        message.className = "validationMessage";
        message.textContent = element;
        validationDiv.appendChild(message);
    }

    return validationDiv;
}