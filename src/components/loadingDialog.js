import { loadingDialogStrings } from "../model/loadingDialogStrings";
import { createTitle } from "./title";

export const createLoadingDialog = () => {
    const loadingDialog = document.createElement("dialog");
    const loadingTitle = createTitle(loadingDialogStrings.title, "h1");
    const loadingMessage = createTitle(loadingDialogStrings.message, "h3");

    loadingDialog.className = "dialogContainer";

    loadingDialog.appendChild(loadingTitle);
    loadingDialog.appendChild(loadingMessage);

    return loadingDialog;
}