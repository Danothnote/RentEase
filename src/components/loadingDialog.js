import { loadingDialogStrings } from "../model/loadingDialogStrings";

export const createLoadingDialog = () => {
    const loadingDialog = document.createElement("dialog");
    const loadingTitle = document.createElement("h1");
    const loadingMessage = document.createElement("h3");

    loadingDialog.className = "dialogContainer";
    loadingTitle.className = "formTitle";
    loadingMessage.className = "formTitle";

    loadingTitle.textContent = loadingDialogStrings.title;
    loadingMessage.textContent = loadingDialogStrings.message;

    loadingDialog.appendChild(loadingTitle);
    loadingDialog.appendChild(loadingMessage);

    return loadingDialog;
}