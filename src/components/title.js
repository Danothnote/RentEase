export const createTitle = (label, type) => {
    const title = document.createElement(type);
    title.className = "formTitle";
    title.textContent = label;

    return title;
}