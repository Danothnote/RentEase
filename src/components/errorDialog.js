import { errorDialogStrings } from "../model/errorDialogStrings";
import { createButton } from "./button";
import { createTitle } from "./title";

export const createErrorDialog = () => {
    const errorDialog = document.createElement("dialog");
    const errorTitle = createTitle(errorDialogStrings.title, "h1");
    const errorMessage = document.createElement("p");
    const primaryButton = createButton(errorDialogStrings.primaryButton);

    errorDialog.className = "errorDialogContainer";
    errorMessage.className = "formLabel";

    errorMessage.id = errorDialogStrings.messageID;

    primaryButton.addEventListener("click", () => {
        errorDialog.close();
    })

    errorDialog.appendChild(errorTitle);
    errorDialog.appendChild(errorMessage);
    errorDialog.appendChild(primaryButton);

    return errorDialog;
}