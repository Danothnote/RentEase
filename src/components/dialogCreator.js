import { updateUser } from "../functions/profile/updateUser";
import { errorStrings } from "../model/errorStrings";
import { profileStrings } from "../model/profile/profileStrings";

export const dialogCreator = (title, placeholder, type, id) => {
    const dialog = document.createElement("dialog");
    const dialogContent = document.createElement("div");
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
    dialogSecondaryButton.className = "formSecondaryButton";
    dialogContent.appendChild(dialogTitle);

    // Agregando valores a los elementos del dialog
    if (type === "img") {
        const imgContainer = document.createElement("div");
        const dropImg = document.createElement("div");
        const dropLabelDiv = document.createElement("div");
        const dropLabel = document.createElement("p");
        const dropLabelIcon = document.createElement("img");

        dialogTitle.textContent = profileStrings.dialogImgTitle;
        imgContainer.className = "imgContainer";
        dropImg.className = "dropImg";
        dropLabelDiv.className = "dropLabelDiv";
        dropLabel.className = "dropLabel";
        dropLabelIcon.className = "dropLabelIcon";
        dialogInput.style.marginTop = "35px";
        dialogInput.style.backgroundColor = "white";
        dialogInput.type = "file";
        dialogInput.accept = "image/jpeg, image/png, image/webp, image/gif, image/svg+xml";

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
            const imageTypeJpg = "image/jpeg";
            const imageTypePng = "image/png";
            const imageTypeWebP = "image/webp";
            const imageTypeGIF = "image/gif";
            const imageTypeSVG = "image/svg+xml";
            if (files[0].type.match(imageTypeJpg) || files[0].type.match(imageTypePng) || files[0].type.match(imageTypeWebP) || files[0].type.match(imageTypeGIF) || files[0].type.match(imageTypeSVG)) {
                dialogInput.files = event.dataTransfer.files;
            } else {
                alert(errorStrings.fileTypeError);
            }
        });

        dropLabelDiv.appendChild(dropLabelIcon);
        dropLabelDiv.appendChild(dropLabel);
        dropImg.appendChild(dropLabelDiv);
        imgContainer.appendChild(dropImg);
        imgContainer.appendChild(dialogInput);
        dialogContent.appendChild(imgContainer);
    } else {
        dialogTitle.textContent = profileStrings.dialogTitle + title;
        dialogInput.type = type;
        dialogInput.placeholder = placeholder;
        dialogContent.appendChild(dialogInput);
    }
    dialogPrimaryButton.textContent = profileStrings.dialogPrimaryButton;
    dialogSecondaryButton.textContent = profileStrings.dialogSecundaryButton;

    // Agregando funcionalidad a los botones del dialogo
    dialogPrimaryButton.addEventListener("click", () => {
        updateUser(id, dialogInput);
        dialogInput.value = null;
        dialog.close();
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