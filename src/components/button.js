export const createButton = (label, type) => {
    const button = document.createElement("button");
    button.className = type ? "formPrimaryButton" : "formSecondaryButton";
    button.textContent = label;

    return button;
}