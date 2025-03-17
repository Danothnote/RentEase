import { pageRouter } from "../functions/pageRouter";
import { dialogLoginStrings } from "../model/dialogLoginStrings";
import { pageModel } from "../model/pageModel";
import { createButton } from "./button";
import { createTitle } from "./title";

export const createLoginDialog = () => {
    const dialogLogin = document.createElement("dialog");
    const dialogTitle = createTitle(dialogLoginStrings.title, "h1");
    const dialogMessage = document.createElement("p");
    const dialogButtonsDiv = document.createElement("div");
    const primaryButton = createButton(dialogLoginStrings.primaryButton, true);
    const secondaryButton = createButton(dialogLoginStrings.secondaryButton, false);

    dialogLogin.className = "dialogContainer";
    dialogMessage.className = "formLabel";
    dialogButtonsDiv.className = "profileButtonsDiv";

    dialogTitle.textContent = dialogLoginStrings.title;
    dialogMessage.textContent = dialogLoginStrings.message;
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