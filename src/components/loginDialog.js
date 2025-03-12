import { pageRouter } from "../functions/pageRouter";
import { dialogLoginStrings } from "../model/dialogLoginStrings";
import { pageModel } from "../model/pageModel";

export const createLoginDialog = () => {
    const dialogLogin = document.createElement("dialog");
    const dialogTitle = document.createElement("h1");
    const dialogMessage = document.createElement("p");
    const dialogButtonsDiv = document.createElement("div");
    const primaryButton = document.createElement("button");
    const secondaryButton = document.createElement("button");

    dialogLogin.className = "dialogContainer";
    dialogTitle.className = "formTitle";
    dialogMessage.className = "formLabel";
    dialogButtonsDiv.className = "profileButtonsDiv";
    primaryButton.className = "formPrimaryButton";
    secondaryButton.className = "formSecondaryButton";

    dialogTitle.textContent = dialogLoginStrings.title;
    dialogMessage.textContent = dialogLoginStrings.message;
    primaryButton.textContent = dialogLoginStrings.primaryButton;
    secondaryButton.textContent = dialogLoginStrings.secondaryButton;

    primaryButton.addEventListener("click", () => {
        pageRouter(pageModel.list[1])
        dialogLogin.close();
    })

    secondaryButton.addEventListener("click", () => {
        dialogLogin.close();
    })

    dialogButtonsDiv.appendChild(primaryButton);
    dialogButtonsDiv.appendChild(secondaryButton);
    dialogLogin.appendChild(dialogTitle);
    dialogLogin.appendChild(dialogMessage);
    dialogLogin.appendChild(dialogButtonsDiv);

    return dialogLogin;
}