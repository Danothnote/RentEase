import { createErrorDialog } from "../components/errorDialog";
import { createLoadingDialog } from "../components/loadingDialog";
import { clearInputs } from "../functions/clearInputs";
import { uploadFlat } from "../functions/newFlat/uploadFlat";
import { pageRouter } from "../functions/pageRouter";
import { errorDialogStrings } from "../model/errorDialogStrings";
import { errorStrings } from "../model/errorStrings";
import { validateTypes } from "../model/validateTypes";
import { newFlatStrings } from "../model/newFlat/newFlatStrings";
import { pageModel } from "../model/pageModel";
import { validationDiv } from "../components/validationDiv";
import { createButton } from "../components/button";
import { createImgInput } from "../components/imgInput";
import { createInput } from "../components/input";
import { createTitle } from "../components/title";

export const createNewFlatScreen = () => {
    // Declarando elementos de la pantalla de newFlat
    const newFlatScreen = document.createElement("div");
    const screenGradient = document.createElement("div");
    const loadingDialog = createLoadingDialog();
    const errorDialog = createErrorDialog();
    const formContainer = document.createElement("div");
    const formTitle = createTitle(newFlatStrings.title, "h1");
    const formInputs = document.createElement("div");
    const gridFormInputContainer = document.createElement("div");
    const formInputContainerLeft = document.createElement("div");
    const formInputContainerRight = document.createElement("div");
    const formButtonsContainer = document.createElement("div");
    const formPrimaryButton = createButton(newFlatStrings.primaryButton, true);
    const formSecondaryButton = createButton(newFlatStrings.secondaryButton, false);

    // Agregando clases a los elementos al newFlat screen
    newFlatScreen.className = "newFlatScreen";
    screenGradient.className = "containerGradient";
    formContainer.className = "formContainer";
    formInputs.className = "formInputContainer";
    gridFormInputContainer.className = "gridFormInputContainer";
    formInputContainerLeft.className = "formInputContainerLeft";
    formInputContainerRight.className = "formInputContainerRight";
    formButtonsContainer.className = "formButtonsContainer";
    formSecondaryButton.className = "formSecondaryButton";

    // Agregando propiedades a los elementos
    formPrimaryButton.disabled = true;

    newFlatStrings.left.forEach(element => {
        if (element.type === "img") {
            const label = document.createElement("p");
            const imgInput = createImgInput();
            const dropImg = imgInput.childNodes[0];
            const uploadButton = imgInput.childNodes[1].childNodes[1];

            label.className = "formLabel";
            label.textContent = element.label;
            uploadButton.id = element.id;

            dropImg.addEventListener("drop", (event) => {
                event.preventDefault();
                dropImg.style.backgroundColor = "Transparent";
                const files = event.dataTransfer.files;

                if (files[0].type.match(validateTypes.jpg) || files[0].type.match(validateTypes.png) || files[0].type.match(validateTypes.webp) || files[0].type.match(validateTypes.gif) || files[0].type.match(validateTypes.svg)) {
                    uploadButton.files = event.dataTransfer.files;
                    element.valid = true;
                    newFlatStrings.left.every(input => input.valid) && newFlatStrings.right.every(input => input.valid) ? formPrimaryButton.disabled = false : formPrimaryButton.disabled = true;
                } else {
                    document.getElementById(errorDialogStrings.messageID).textContent = errorStrings.fileTypeError;
                    errorDialog.showModal();
                }
            });

            uploadButton.addEventListener("input", () => {
                uploadButton.files[0] !== undefined ? element.valid = true : element.valid = false;
                newFlatStrings.left.every(input => input.valid) && newFlatStrings.right.every(input => input.valid) ? formPrimaryButton.disabled = false : formPrimaryButton.disabled = true;
            });

            formInputContainerLeft.appendChild(label);
            formInputContainerLeft.appendChild(imgInput);
        } else {
            const inputDiv = createInput(element.label, element.placeholder, element.type, element.id);
            const input = inputDiv.childNodes[1];
            const validationInputDiv = validationDiv(element.validation);

            input.addEventListener("focus", () => {
                validationInputDiv.style.display = "block";
            })
            input.addEventListener("blur", () => {
                validationInputDiv.style.display = "none";
            });

            switch (element.id) {
                case newFlatStrings.left[1].id:
                    input.addEventListener("input", () => {
                        if (input.value !== "" && input.value >= element.min) {
                            element.valid = true;
                            validationInputDiv.style.display = "none";
                            newFlatStrings.left.every(input => input.valid) && newFlatStrings.right.every(input => input.valid) ? formPrimaryButton.disabled = false : formPrimaryButton.disabled = true;
                        } else {
                            element.valid = false;
                            validationInputDiv.style.display = "block";
                            formPrimaryButton.disabled = true;
                        }
                    });
                    break;
                case newFlatStrings.left[2].id:
                    input.min = newFlatStrings.left[2].min;
                    input.max = newFlatStrings.left[2].max;
                    input.addEventListener("input", () => {
                        if (input.value !== "" && input.value >= element.min && input.value <= element.max) {
                            element.valid = true;
                            validationInputDiv.style.display = "none";
                            newFlatStrings.left.every(input => input.valid) && newFlatStrings.right.every(input => input.valid) ? formPrimaryButton.disabled = false : formPrimaryButton.disabled = true;
                        } else {
                            element.valid = false;
                            validationInputDiv.style.display = "block";
                            formPrimaryButton.disabled = true;
                        }
                    });
                    break;
                case newFlatStrings.left[3].id:
                    input.min = element.min;
                    input.addEventListener("input", () => {
                        if (input.value !== "" && input.value >= element.min) {
                            element.valid = true;
                            validationInputDiv.style.display = "none";
                            newFlatStrings.left.every(input => input.valid) && newFlatStrings.right.every(input => input.valid) ? formPrimaryButton.disabled = false : formPrimaryButton.disabled = true;
                        } else {
                            element.valid = false;
                            validationInputDiv.style.display = "block";
                            formPrimaryButton.disabled = true;
                        }
                    });
                    break;
            }

            if (element.id === newFlatStrings.left[2].id) {
                input.min = element.min;
                input.max = element.max;
            }

            inputDiv.appendChild(input);
            inputDiv.appendChild(validationInputDiv);
            formInputContainerLeft.appendChild(inputDiv);
        }
    })

    newFlatStrings.right.forEach(element => {
        if (element.type === "select") {
            const inputDiv = createInput(element.label, element.placeholder, element.type, element.id, element.options);
            const select = inputDiv.childNodes[1];
            
            select.addEventListener("input", () => {
                newFlatStrings.left.every(input => input.valid) && newFlatStrings.right.every(input => input.valid) ? formPrimaryButton.disabled = false : formPrimaryButton.disabled = true;
            });
            
            formInputContainerRight.appendChild(inputDiv);
        } else {
            const inputDiv = createInput(element.label, element.placeholder, element.type, element.id);
            const input = inputDiv.childNodes[1];
            const validationInputDiv = validationDiv(element.validation);

            input.addEventListener("focus", () => {
                validationInputDiv.style.display = "block";
            })
            input.addEventListener("blur", () => {
                validationInputDiv.style.display = "none";
            });

            if (element.id === newFlatStrings.right[0].id || element.id === newFlatStrings.right[1].id || element.id === newFlatStrings.right[2].id || element.id === newFlatStrings.right[3].id) {
                input.addEventListener("input", () => {
                    if (input.value !== "" && input.value.length >= 2) {
                        element.valid = true;
                        validationInputDiv.style.display = "none";
                        newFlatStrings.left.every(input => input.valid) && newFlatStrings.right.every(input => input.valid) ? formPrimaryButton.disabled = false : formPrimaryButton.disabled = true;
                    } else {
                        element.valid = false;
                        validationInputDiv.style.display = "block";
                        formPrimaryButton.disabled = true;
                    }
                });
            } else if (element.id === newFlatStrings.right[5].id) {
                input.min = element.min;
                input.addEventListener("input", () => {
                    if (input.value !== "" && input.value > 0) {
                        element.valid = true;
                        validationInputDiv.style.display = "none";
                        newFlatStrings.left.every(input => input.valid) && newFlatStrings.right.every(input => input.valid) ? formPrimaryButton.disabled = false : formPrimaryButton.disabled = true;
                    } else {
                        element.valid = false;
                        validationInputDiv.style.display = "block";
                        formPrimaryButton.disabled = true;
                    }
                });
            }

            if (element.id === newFlatStrings.right[3].id) {
                input.addEventListener("input", () => {
                    input.value = input.value.toUpperCase();
                })
            } else if (element.id === newFlatStrings.right[0].id || element.id === newFlatStrings.right[1].id || element.id === newFlatStrings.right[2].id) {
                input.addEventListener("input", () => {
                    input.value = String(input.value).charAt(0).toUpperCase() + String(input.value).slice(1);
                })
            }

            inputDiv.appendChild(validationInputDiv);
            formInputContainerRight.appendChild(inputDiv);
        }
    });

    // Agregando eventos a los botones
    formPrimaryButton.addEventListener("click", () => {
        if (newFlatStrings.left.every(input => input.valid) && newFlatStrings.right.every(input => input.valid)) {
            uploadFlat(document.getElementById(newFlatStrings.left[0].id).files[0], document.getElementById(`${newFlatStrings.left[1].id}Input`).value, document.getElementById(`${newFlatStrings.left[2].id}Input`).value, document.getElementById(`${newFlatStrings.left[3].id}Input`).value, document.getElementById(`${newFlatStrings.right[0].id}Input`).value, document.getElementById(`${newFlatStrings.right[1].id}Input`).value, document.getElementById(`${newFlatStrings.right[2].id}Input`).value, document.getElementById(`${newFlatStrings.right[3].id}Input`).value, document.getElementById(`${newFlatStrings.right[4].id}Input`).value, document.getElementById(`${newFlatStrings.right[5].id}Input`).value, loadingDialog, errorDialog);
        } else {
            document.getElementById(errorDialogStrings.messageID).textContent = errorStrings.fillInputsError.label;
            errorDialog.showModal();
        }
    });

    formSecondaryButton.addEventListener("click", () => {
        clearInputs();
        pageRouter(pageModel.list[0]);
    });

    // Agregando los botones
    formButtonsContainer.appendChild(formPrimaryButton);
    formButtonsContainer.appendChild(formSecondaryButton);

    // Agregando los elementos al login screen
    screenGradient.appendChild(formContainer);
    screenGradient.appendChild(loadingDialog);
    screenGradient.appendChild(errorDialog);
    formContainer.appendChild(formTitle);
    formContainer.appendChild(formInputs);
    formInputs.appendChild(gridFormInputContainer);
    formInputs.appendChild(formButtonsContainer);
    gridFormInputContainer.appendChild(formInputContainerLeft);
    gridFormInputContainer.appendChild(formInputContainerRight);
    newFlatScreen.appendChild(screenGradient);

    return newFlatScreen;
}