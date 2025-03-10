import { clearInputs } from "../functions/clearInputs";
import { uploadFlat } from "../functions/newFlat/uploadFlat";
import { pageRouter } from "../functions/pageRouter";
import { errorStrings } from "../model/errorStrings";
import { newFlatStrings } from "../model/newFlat/newFlatStrings";
import { pageModel } from "../model/pageModel";

export const createNewFlatScreen = () => {
    // Declarando elementos de la pantalla de newFlat
    const newFlatScreen = document.createElement("div");
    const screenGradient = document.createElement("div");
    const formContainer = document.createElement("div");
    const formTitle = document.createElement("h1");
    const formInputs = document.createElement("div");
    const gridFormInputContainer = document.createElement("div");
    const formInputContainerLeft = document.createElement("div");
    const formInputContainerRight = document.createElement("div");
    const formImgContainer = document.createElement("div");
    const formImgLabel = document.createElement("p");
    const formImgShow = document.createElement("img");
    const formPrimaryButton = document.createElement("button");
    const formSecondaryButton = document.createElement("button");

    // Agregando clases a los elementos al login screen
    newFlatScreen.className = "newFlatScreen";
    screenGradient.className = "containerGradient";
    formContainer.className = "formContainer";
    formTitle.className = "formTitle";
    formInputs.className = "formInputs";
    gridFormInputContainer.className = "gridFormInputContainer";
    formInputContainerLeft.className = "formInputContainerLeft";
    formInputContainerRight.className = "formInputContainerRight";
    formImgContainer.className = "formImgContainer";
    formImgLabel.className = "formImgLabel";
    formImgShow.className = "formImgShow";
    formPrimaryButton.className = "formPrimaryButton";
    formSecondaryButton.className = "formSecondaryButton";

    // Agregando propiedades a los elementos
    formTitle.textContent = newFlatStrings.title;

    newFlatStrings.left.forEach(element => {
        const label = document.createElement("p");
        label.className = "formLabel";
        label.textContent = element.label;
        formInputContainerLeft.appendChild(label);

        if (element.type === "img") {
            const imgContainer = document.createElement("div");
            const dropImg = document.createElement("div");
            const dropLabelDiv = document.createElement("div");
            const dropLabel = document.createElement("p");
            const dropLabelIcon = document.createElement("img");
            const uploadButton = document.createElement("input");

            imgContainer.className = "imgContainer";
            dropImg.className = "dropImg";
            dropLabelDiv.className = "dropLabelDiv";
            dropLabel.className = "dropLabel";
            dropLabelIcon.className = "dropLabelIcon";
            uploadButton.className = "formInput";
            uploadButton.id = newFlatStrings.uploadButtonID;
            uploadButton.style.marginTop = "35px";
            uploadButton.style.backgroundColor = "white";

            dropLabel.textContent = newFlatStrings.dropImgLabel;
            uploadButton.type = "file";
            uploadButton.accept = "image/jpeg, image/png, image/webp, image/gif, image/svg+xml";
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
                const imageTypeJpg = "image/jpeg";
                const imageTypePng = "image/png";
                const imageTypeWebP = "image/webp";
                const imageTypeGIF = "image/gif";
                const imageTypeSVG = "image/svg+xml";
                if (files[0].type.match(imageTypeJpg) || files[0].type.match(imageTypePng) || files[0].type.match(imageTypeWebP) || files[0].type.match(imageTypeGIF) || files[0].type.match(imageTypeSVG)) {
                    uploadButton.files = event.dataTransfer.files;
                    element.valid = true;
                } else {
                    alert(errorStrings.fileTypeError);
                }
            });

            uploadButton.addEventListener("change", () => {
                uploadButton.files[0] !== undefined ? element.valid = true : element.valid = false;
            });

            dropLabelDiv.appendChild(dropLabelIcon);
            dropLabelDiv.appendChild(dropLabel);
            dropImg.appendChild(dropLabelDiv);
            imgContainer.appendChild(dropImg);
            imgContainer.appendChild(uploadButton);
            formInputContainerLeft.appendChild(imgContainer);
        } else {
            const input = document.createElement("input");
            input.className = "formInput";
            input.type = element.type;
            input.placeholder = element.placeholder;
            input.id = element.id;

            input.addEventListener("change", () => {
                input.value !== "" ? element.valid = true : element.valid = false;
            });

            if (element.id === "constructionDate") {
                input.min = element.min;
                input.max = element.max;
                input.value = element.max;
            }

            formInputContainerLeft.appendChild(input);
        }
    })

    newFlatStrings.right.forEach(element => {
        const label = document.createElement("p");
        label.className = "formLabel";
        label.textContent = element.label;

        formInputContainerRight.appendChild(label);

        if (element.type === "select") {
            const select = document.createElement("select");
            select.className = "formSelectInput";
            element.options.forEach(option => {
                const optionElement = document.createElement("option");
                optionElement.textContent = option;
                select.appendChild(optionElement);
            });
            select.id = element.id;
            select.value = element.options[1];
            formInputContainerRight.appendChild(select);
        } else {
            const input = document.createElement("input");
            input.className = "formInput";
            input.type = element.type;
            input.placeholder = element.placeholder;
            input.id = element.id;

            input.addEventListener("change", () => {
                input.value !== "" ? element.valid = true : element.valid = false;
            });

            formInputContainerRight.appendChild(input);
        }
    });

    // Agregando los botones
    formPrimaryButton.textContent = newFlatStrings.primary;
    formSecondaryButton.textContent = newFlatStrings.secondary;
    formInputContainerLeft.appendChild(formPrimaryButton);
    formInputContainerRight.appendChild(formSecondaryButton);

    // Agregando eventos a los botones
    formPrimaryButton.addEventListener("click", () => {
        if (newFlatStrings.left.every(input => input.valid) && newFlatStrings.right.every(input => input.valid)) {
            uploadFlat(document.getElementById("uploadButton").files[0], document.getElementById("area").value, document.getElementById("yearBuilt").value, document.getElementById("dateAvailable").value, document.getElementById("flatName").value, document.getElementById("city").value, document.getElementById("street").value, document.getElementById("streetNumber").value, document.getElementById("airConditioning").value, document.getElementById("rentPrice").value);
        } else {
            alert(errorStrings.fillInputsError);
        }
    })

    formSecondaryButton.addEventListener("click", () => {
        clearInputs();
        pageRouter(pageModel.list[0]);
    })

    // Agregando los elementos al login screen
    screenGradient.appendChild(formContainer);
    formContainer.appendChild(formTitle);
    formContainer.appendChild(formInputs);
    formInputs.appendChild(gridFormInputContainer);
    gridFormInputContainer.appendChild(formInputContainerLeft);
    gridFormInputContainer.appendChild(formInputContainerRight);
    newFlatScreen.appendChild(screenGradient);

    return newFlatScreen;
}