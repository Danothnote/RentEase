import { clearInputs } from "../functions/clearInputs";
import { pageRouter } from "../functions/pageRouter";
import { errorStrings } from "../model/errorStrings";
import { newFlatStrings } from "../model/newFlat/newFlatStrings";
import { pageModel } from "../model/pageModel";

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
        const img = document.createElement("div");
        const dragLabelDiv = document.createElement("div");
        const dragLabel = document.createElement("p");
        const dragLabelIcon = document.createElement("img");
        const uploadButton = document.createElement("input");

        imgContainer.className = "imgContainer";
        img.className = "dragImg";
        dragLabelDiv.className = "dragLabelDiv";
        dragLabel.className = "dragLabel";
        dragLabelIcon.className = "dragLabelIcon";
        uploadButton.className = "formInput";
        uploadButton.style.marginTop = "35px";
        uploadButton.style.backgroundColor = "white";

        dragLabel.textContent = newFlatStrings.dragImgLabel;
        uploadButton.type = "file";
        uploadButton.accept = "image/*";
        dragLabelIcon.alt = newFlatStrings.dragImgIconAlt;
        dragLabelIcon.src = newFlatStrings.dragImgIconSrc;

        dragLabelDiv.appendChild(dragLabelIcon);
        dragLabelDiv.appendChild(dragLabel);
        img.appendChild(dragLabelDiv);
        imgContainer.appendChild(img);
        imgContainer.appendChild(uploadButton);
        formInputContainerLeft.appendChild(imgContainer);
    } else {
        const input = document.createElement("input");
        input.className = "formInput";
        input.type = element.type;
        input.placeholder = element.placeholder;

        input.addEventListener("change", () => {
            input.value !== "" ? element.valid = true : element.valid = false;
        });

        if (element.id === "constructionDate") {
            input.min = element.min;
            input.max= element.max;
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
        formInputContainerRight.appendChild(select);
    } else {
        const input = document.createElement("input");
        input.className = "formInput";
        input.type = element.type;
        input.placeholder = element.placeholder;

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
        clearInputs();
        pageRouter(pageModel.list[0]);
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

export default newFlatScreen;