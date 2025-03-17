import { updateUser } from "../functions/profile/updateUser";
import { errorDialogStrings } from "../model/errorDialogStrings";
import { errorStrings } from "../model/errorStrings";
import { profileStrings } from "../model/profile/profileStrings";
import { validationDiv } from "./validationDiv";
import { createButton } from "./button";
import { createImgInput } from "./imgInput";
import { validateTypes } from "../model/validateTypes";
import { createInput } from "./input";
import { clearInputs } from "../functions/clearInputs";
import { createTitle } from "./title";

export const dialogCreator = (title, placeholder, type, id, loadingDialog, errorDialog) => {
    const dialog = document.createElement("dialog");
    const dialogContent = document.createElement("div");
    const dialogTitle = createTitle(type === "img" ? profileStrings.dialogImgTitle : profileStrings.dialogTitle + title, "h2");
    const dialogButtonContainer = document.createElement("div");
    const dialogPrimaryButton = createButton(profileStrings.dialogPrimaryButton, true);
    const dialogSecondaryButton = createButton(profileStrings.dialogSecundaryButton, false);
    let dialogInputValue = null;

    // Asignando clases a los elementos
    dialog.className = "dialogContainer";
    dialogContent.className = "dialogContent";
    dialogButtonContainer.className = "profileButtonsDiv";
    dialogPrimaryButton.disabled = true;
    dialogContent.appendChild(dialogTitle);

    // Agregando valores a los elementos del dialog
    if (type === "img") {
        const imgInput = createImgInput();
        const dropImg = imgInput.childNodes[0];
        const dialogInput = imgInput.childNodes[1].childNodes[1];

        dropImg.addEventListener("drop", (event) => {
            event.preventDefault();
            dropImg.style.backgroundColor = "Transparent";
            const files = event.dataTransfer.files;

            if (files[0].type.match(validateTypes.jpg) || files[0].type.match(validateTypes.png) || files[0].type.match(validateTypes.webp) || files[0].type.match(validateTypes.gif) || files[0].type.match(validateTypes.svg)) {
                dialogInput.files = event.dataTransfer.files;
                dialogPrimaryButton.disabled = false;
                dialogInputValue = dialogInput.files[0];
            } else {
                document.getElementById(errorDialogStrings.messageID).textContent = errorStrings.fileTypeError;
                errorDialog.showModal();
            }
        });

        dialogInput.addEventListener("input", () => {
            if (dialogInput.files[0]) {
                dialogPrimaryButton.disabled = false;
                dialogInputValue = dialogInput.files[0];
            } else {
                dialogPrimaryButton.disabled = true;
            }
        });

        dialogContent.appendChild(imgInput);
    } else {
        const dialogInputDiv = createInput("", placeholder, type, id);
        const dialogInput = dialogInputDiv.childNodes[0];

        if (type === "text") {
            const dialogInputValidation = validationDiv(profileStrings.textValidation);
            dialogInputDiv.appendChild(dialogInputValidation);

            dialogInput.addEventListener("focus", () => {
                dialogInputValidation.style.display = "block";
            })
            dialogInput.addEventListener("blur", () => {
                dialogInputValidation.style.display = "none";
            });

            dialogInput.addEventListener("input", () => {
                if (dialogInput.value.length >= 2) {
                    dialogInputValidation.style.display = "none";
                    dialogPrimaryButton.disabled = false;
                } else {
                    dialogInputValidation.style.display = "block";
                    dialogPrimaryButton.disabled = true;
                }
            });

            if (id === profileStrings.right[0].id) {
                dialogInput.addEventListener("input", () => {
                    dialogInput.value = dialogInput.value.toLowerCase();
                    dialogInputValue = dialogInput.value;
                });
            } else {
                dialogInput.addEventListener("input", () => {
                    dialogInput.value = String(dialogInput.value).charAt(0).toUpperCase() + String(dialogInput.value).slice(1);
                    dialogInputValue = dialogInput.value;
                });
            }
        } else {
            const dialogInputValidation = validationDiv(profileStrings.dateValidation);
            dialogInputDiv.appendChild(dialogInputValidation);
            dialogInput.min = profileStrings.right[3].min;
            dialogInput.max = profileStrings.right[3].max;
            dialogInput.addEventListener("input", () => {
                if (dialogInput.value !== "" && dialogInput.value >= profileStrings.right[3].min && dialogInput.value <= profileStrings.right[3].max) {
                    dialogInputValidation.style.display = "none";
                    dialogPrimaryButton.disabled = false;
                    dialogInputValue = dialogInput.value;
                } else {
                    dialogInputValidation.style.display = "block";
                    dialogPrimaryButton.disabled = true;
                }
            });
        }

        dialogContent.appendChild(dialogInputDiv);
    }

    // Agregando funcionalidad a los botones del dialogo
    dialogPrimaryButton.addEventListener("click", () => {
        if (dialogInputValue === undefined || dialogInputValue === null || dialogInputValue === "") {
            document.getElementById(errorDialogStrings.messageID).textContent = errorStrings.fillInputsError.label;
            errorDialog.showModal();
        } else {
            document.querySelector(".formInput").value = null;
            updateUser(id, dialogInputValue, dialog, loadingDialog, errorDialog);
            dialogInputValue = null;
        }
    });

    dialogSecondaryButton.addEventListener("click", () => {
        clearInputs();
        dialogInputValue = null;
        dialog.close();
    });

    // Agregando contenido al dialogo
    dialogButtonContainer.appendChild(dialogPrimaryButton);
    dialogButtonContainer.appendChild(dialogSecondaryButton);
    dialogContent.appendChild(dialogButtonContainer);
    dialog.appendChild(dialogContent);

    return dialog;
}