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

export const createNewFlatScreen = () => {
    // Declarando elementos de la pantalla de newFlat
    const newFlatScreen = document.createElement("div");
    const screenGradient = document.createElement("div");
    const loadingDialog = createLoadingDialog();
    const errorDialog = createErrorDialog();
    const formContainer = document.createElement("div");
    const formTitle = document.createElement("h1");
    const formInputs = document.createElement("div");
    const gridFormInputContainer = document.createElement("div");
    const formInputContainerLeft = document.createElement("div");
    const formInputContainerRight = document.createElement("div");
    const formImgContainer = document.createElement("div");
    const formButtonsContainer = document.createElement("div");
    const formImgLabel = document.createElement("p");
    const formImgShow = document.createElement("img");
    const formPrimaryButton = document.createElement("button");
    const formSecondaryButton = document.createElement("button");

    // Agregando clases a los elementos al newFlat screen
    newFlatScreen.className = "newFlatScreen";
    screenGradient.className = "containerGradient";
    formContainer.className = "formContainer";
    formTitle.className = "formTitle";
    formInputs.className = "formInputContainer";
    gridFormInputContainer.className = "gridFormInputContainer";
    formInputContainerLeft.className = "formInputContainerLeft";
    formInputContainerRight.className = "formInputContainerRight";
    formImgContainer.className = "formImgContainer";
    formImgLabel.className = "formImgLabel";
    formImgShow.className = "formImgShow";
    formButtonsContainer.className = "formButtonsContainer";
    formPrimaryButton.className = "formPrimaryButton";
    formSecondaryButton.className = "formSecondaryButton";
    
    // Agregando propiedades a los elementos
    formTitle.textContent = newFlatStrings.title;
    formPrimaryButton.disabled = true;

    newFlatStrings.left.forEach(element => {
        const inputDiv = document.createElement("div");
        const label = document.createElement("p");
        label.className = "formLabel";
        label.textContent = element.label;

        if (element.type === "img") {
            const imgContainer = document.createElement("div");
            const dropImg = document.createElement("div");
            const dropLabelDiv = document.createElement("div");
            const dropLabel = document.createElement("p");
            const dropLabelIcon = document.createElement("img");
            const uploadButtonDiv = document.createElement("div");
            const uploadButtonLabel = document.createElement("p");
            const uploadButton = document.createElement("input");

            imgContainer.className = "imgContainer";
            dropImg.className = "dropImg";
            dropLabelDiv.className = "dropLabelDiv";
            dropLabel.className = "dropLabel";
            dropLabelIcon.className = "dropLabelIcon";
            uploadButtonDiv.className = "formInputDiv";
            uploadButtonLabel.className = "formLabel";
            uploadButton.className = "formInput";
            uploadButton.id = newFlatStrings.uploadButtonID;
            uploadButtonDiv.style.marginTop = "28px";
            uploadButton.style.backgroundColor = "white";

            dropLabel.textContent = newFlatStrings.dropImgLabel;
            uploadButtonLabel.textContent = newFlatStrings.left[0].uploadButtonLabel;
            uploadButton.type = "file";
            uploadButton.accept = `${validateTypes.jpg}, ${validateTypes.png}, ${validateTypes.webp}, ${validateTypes.gif}, ${validateTypes.svg}`;
            dropLabelIcon.alt = newFlatStrings.dropImgIconAlt;
            dropLabelIcon.src = newFlatStrings.dropImgIconSrc;

            dropImg.addEventListener("dragover", (event) => {
                event.preventDefault();
                dropImg.style.backgroundColor = "lightgray";
            });

            dropImg.addEventListener("drop", (event) => {
                event.preventDefault();
                dropImg.style.backgroundColor = "white";
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

            if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
                label.style.display = "none";
                dropImg.style.display = "none";
                uploadButtonLabel.textContent = newFlatStrings.left[0].labelMobile;
                uploadButtonDiv.style.marginTop = "0px";
            }
            
            imgContainer.appendChild(label);
            dropLabelDiv.appendChild(dropLabelIcon);
            dropLabelDiv.appendChild(dropLabel);
            dropImg.appendChild(dropLabelDiv);
            uploadButtonDiv.appendChild(uploadButtonLabel);
            uploadButtonDiv.appendChild(uploadButton);
            imgContainer.appendChild(dropImg);
            imgContainer.appendChild(uploadButtonDiv);
            inputDiv.appendChild(imgContainer);
            formInputContainerLeft.appendChild(inputDiv);
        } else {
            inputDiv.appendChild(label);
            const input = document.createElement("input");
            const validationInputDiv = validationDiv(element.validation);
            inputDiv.className = "formInputDiv";
            input.className = "formInput";
            input.type = element.type;
            input.placeholder = element.placeholder;
            input.id = element.id;

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

            if (element.id === "constructionDate") {
                input.min = element.min;
                input.max = element.max;
                input.value = element.max;
            }

            inputDiv.appendChild(input);
            inputDiv.appendChild(validationInputDiv);
            formInputContainerLeft.appendChild(inputDiv);
        }
    })

    newFlatStrings.right.forEach(element => {
        const inputDiv = document.createElement("div");
        const label = document.createElement("p");
        inputDiv.className = "formInputDiv";
        label.className = "formLabel";
        label.textContent = element.label;

        inputDiv.appendChild(label);

        if (element.type === "select") {
            const select = document.createElement("select");
            select.className = "formSelectInput";
            element.options.forEach(option => {
                const optionElement = document.createElement("option");
                optionElement.textContent = option;
                select.appendChild(optionElement);
            });
            select.id = element.id;
            inputDiv.appendChild(select);
            formInputContainerRight.appendChild(inputDiv);

            select.addEventListener("input", () => {
                newFlatStrings.left.every(input => input.valid) && newFlatStrings.right.every(input => input.valid) ? formPrimaryButton.disabled = false : formPrimaryButton.disabled = true;
            });
        } else {
            const input = document.createElement("input");
            const validationInputDiv = validationDiv(element.validation);
            input.className = "formInput";
            input.type = element.type;
            input.placeholder = element.placeholder;
            input.id = element.id;

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

            inputDiv.appendChild(input);
            inputDiv.appendChild(validationInputDiv);
            formInputContainerRight.appendChild(inputDiv);
        }
    });

    // Agregando eventos a los botones
    formPrimaryButton.addEventListener("click", () => {
        if (newFlatStrings.left.every(input => input.valid) && newFlatStrings.right.every(input => input.valid)) {
            uploadFlat(document.getElementById("uploadButton").files[0], document.getElementById("area").value, document.getElementById("yearBuilt").value, document.getElementById("dateAvailable").value, document.getElementById("flatName").value, document.getElementById("city").value, document.getElementById("street").value, document.getElementById("streetNumber").value, document.getElementById("airConditioning").value, document.getElementById("rentPrice").value, loadingDialog, errorDialog);
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
    formPrimaryButton.textContent = newFlatStrings.primary;
    formSecondaryButton.textContent = newFlatStrings.secondary;
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