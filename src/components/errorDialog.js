import { errorDialogStrings } from "../model/errorDialogStrings";

export const createErrorDialog = () => {
    const errorDialog = document.createElement("dialog");
    const errorTitle = document.createElement("h1");
    const errorMessage = document.createElement("p");
    const primaryButton = document.createElement("button");

    errorDialog.className = "errorDialogContainer";
    errorTitle.className = "formTitle";
    errorMessage.className = "formLabel";
    primaryButton.className = "formPrimaryButton";

    errorTitle.textContent = errorDialogStrings.title;
    errorMessage.id = errorDialogStrings.messageID;
    primaryButton.textContent = errorDialogStrings.primaryButton;

    primaryButton.addEventListener("click", () => {
        errorDialog.close();
    })

    errorDialog.appendChild(errorTitle);
    errorDialog.appendChild(errorMessage);
    errorDialog.appendChild(primaryButton);

    return errorDialog;
}