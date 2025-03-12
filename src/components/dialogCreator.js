import { updateUser } from "../functions/profile/updateUser";
import { errorDialogStrings } from "../model/errorDialogStrings";
import { errorStrings } from "../model/errorStrings";
import { validateTypes } from "../model/validateTypes";
import { profileStrings } from "../model/profile/profileStrings";
import { validationDiv } from "./validationDiv";

export const dialogCreator = (title, placeholder, type, id, loadingDialog, errorDialog) => {
    const dialog = document.createElement("dialog");
    const dialogContent = document.createElement("div");
    const dialogInputDiv = document.createElement("div");
    const dialogTitle = document.createElement("h2");
    const dialogInput = document.createElement("input");
    const dialogButtonContainer = document.createElement("div");
    const dialogPrimaryButton = document.createElement("button");
    const dialogSecondaryButton = document.createElement("button");

    // Asignando clases a los elementos
    dialog.className = "dialogContainer";
    dialogContent.className = "dialogContent";
    dialogTitle.className = "formTitle";
    dialogInput.className = "formInput";
    dialogButtonContainer.className = "profileButtonsDiv";
    dialogPrimaryButton.className = "formPrimaryButton";
    dialogPrimaryButton.disabled = true;
    dialogSecondaryButton.className = "formSecondaryButton";
    dialogContent.appendChild(dialogTitle);

    // Agregando valores a los elementos del dialog
    if (type === "img") {
        const imgContainer = document.createElement("div");
        const dropImg = document.createElement("div");
        const dropLabelDiv = document.createElement("div");
        const dialogUploadDiv = document.createElement("div");
        const dropLabel = document.createElement("p");
        const dropLabelIcon = document.createElement("img");
        const dialogInputLabel = document.createElement("p");

        dialogTitle.textContent = profileStrings.dialogImgTitle;
        imgContainer.className = "imgContainer";
        dropImg.className = "dropImg";
        dropLabelDiv.className = "dropLabelDiv";
        dropLabel.className = "dropLabel";
        dropLabelIcon.className = "dropLabelIcon";
        dialogUploadDiv.className = "formInputDiv";
        dialogInputLabel.className = "formLabel";
        dialogInputLabel.textContent = profileStrings.dialogInputLabel;
        dialogUploadDiv.style.marginTop = "30px";
        dialogInput.style.backgroundColor = "white";
        dialogInput.type = "file";
        dialogInput.accept = `${validateTypes.jpg}, ${validateTypes.png}, ${validateTypes.webp}, ${validateTypes.gif}, ${validateTypes.svg}`;

        dropLabel.textContent = profileStrings.dropImgLabel;
        dropLabelIcon.alt = profileStrings.dropImgIconAlt;
        dropLabelIcon.src = profileStrings.dropImgIconSrc;

        dropImg.addEventListener("dragover", (event) => {
            event.preventDefault();
            dropImg.style.backgroundColor = "lightgray";
        });

        dropImg.addEventListener("drop", (event) => {
            event.preventDefault();
            dropImg.style.backgroundColor = "white";
            const files = event.dataTransfer.files;
            if (files[0].type.match(validateTypes.jpg) || files[0].type.match(validateTypes.png) || files[0].type.match(validateTypes.webp) || files[0].type.match(validateTypes.gif) || files[0].type.match(validateTypes.svg)) {
                dialogInput.files = event.dataTransfer.files;
                dialogPrimaryButton.disabled = false;
            } else {
                dialogPrimaryButton.disabled = true;
                document.getElementById(errorDialogStrings.messageID).textContent = errorStrings.fileTypeError;
                errorDialog.showModal();
            }
        });

        dialogInput.addEventListener("input", () => {
            if (dialogInput.files[0]) {
                dialogPrimaryButton.disabled = false;
            } else {
                dialogPrimaryButton.disabled = true;
            }
        });

        if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
            dropImg.style.display = "none";
            dialogInputLabel.textContent = profileStrings.userImg.labelMobile;
            dialogUploadDiv.style.marginTop = "0px";
        }

        dropLabelDiv.appendChild(dropLabelIcon);
        dropLabelDiv.appendChild(dropLabel);
        dialogUploadDiv.appendChild(dialogInputLabel);
        dialogUploadDiv.appendChild(dialogInput);
        dropImg.appendChild(dropLabelDiv);
        imgContainer.appendChild(dropImg);
        imgContainer.appendChild(dialogUploadDiv);
        dialogInputDiv.appendChild(imgContainer);
        dialogContent.appendChild(dialogInputDiv);
    } else {
        dialogInputDiv.className = "formInputDiv";
        dialogTitle.textContent = profileStrings.dialogTitle + title;
        dialogInput.type = type;
        dialogInput.placeholder = placeholder;
        dialogInputDiv.appendChild(dialogInput);

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
                });
            } else {
                dialogInput.addEventListener("input", () => {
                    dialogInput.value = String(dialogInput.value).charAt(0).toUpperCase() + String(dialogInput.value).slice(1);
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
                } else {
                    dialogInputValidation.style.display = "block";
                    dialogPrimaryButton.disabled = true;
                }
            });
        }

        dialogContent.appendChild(dialogInputDiv);
    }
    dialogPrimaryButton.textContent = profileStrings.dialogPrimaryButton;
    dialogSecondaryButton.textContent = profileStrings.dialogSecundaryButton;

    // Agregando funcionalidad a los botones del dialogo
    dialogPrimaryButton.addEventListener("click", () => {
        if (dialogInput.value === undefined || dialogInput.value === null || dialogInput.value === "") {
            document.getElementById(errorDialogStrings.messageID).textContent = errorStrings.fillInputsError.label;
            errorDialog.showModal();
        } else {
            updateUser(id, dialogInput, dialog, loadingDialog);
        }
    });

    dialogSecondaryButton.addEventListener("click", () => {
        dialogInput.value = null;
        dialog.close();
    });

    // Agregando contenido al dialogo
    dialogButtonContainer.appendChild(dialogPrimaryButton);
    dialogButtonContainer.appendChild(dialogSecondaryButton);
    dialogContent.appendChild(dialogButtonContainer);
    dialog.appendChild(dialogContent);

    return dialog;
}