import { profileStrings } from "../model/profile/profileStrings";

export const dialogCreator = (title, placeholder, type, primaryButtonFunction) => {
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
        const img = document.createElement("div");
        const dragLabelDiv = document.createElement("div");
        const dragLabel = document.createElement("p");
        const dragLabelIcon = document.createElement("img");
        
        dialogTitle.textContent = profileStrings.dialogImgTitle;
        imgContainer.className = "imgContainer";
        img.className = "dragImg";
        dragLabelDiv.className = "dragLabelDiv";
        dragLabel.className = "dragLabel";
        dragLabelIcon.className = "dragLabelIcon";
        dialogInput.style.marginTop = "35px";
        dialogInput.style.backgroundColor = "white";
        dialogInput.type = "file";
        dialogInput.accept = "image/*";

        dragLabel.textContent = profileStrings.dragImgLabel;
        dragLabelIcon.alt = profileStrings.dragImgIconAlt;
        dragLabelIcon.src = profileStrings.dragImgIconSrc;

        dragLabelDiv.appendChild(dragLabelIcon);
        dragLabelDiv.appendChild(dragLabel);
        img.appendChild(dragLabelDiv);
        imgContainer.appendChild(img);
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
        primaryButtonFunction;
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