import { clearInputs } from "../functions/clearInputs";
import { pageRouter } from "../functions/pageRouter";
import { validatePassword } from "../functions/signup/validatePassword";
import { pageModel } from "../model/pageModel";
import { signupStrings } from "../model/signup/signupStrings";
import { validationStrings } from "../model/signup/validationStrings";

// Declarando elementos de la pantalla de Registro
const signupScreen = document.createElement("div");
const signupForm = document.createElement("div");
const signupValidationsContainer = document.createElement("div");
const screenGrandient = document.createElement("div");
const formContainer = document.createElement("div");
const gridFormInputContainer = document.createElement("div");
const formInputContainerLeft = document.createElement("div");
const formInputContainerRight = document.createElement("div");
const formLabel = document.createElement("p");
const formInput = document.createElement("input");
const formTitle = document.createElement("h1");
const formPrimaryButton = document.createElement("button");
const formSecondaryButton = document.createElement("button");

// Asignando clases a los elementos
signupScreen.className = "signupScreen";
screenGrandient.className = "containerGradient";
formContainer.className = "formContainer";
gridFormInputContainer.className = "gridFormInputContainer";
formInputContainerLeft.className = "formInputContainerLeft";
formInputContainerRight.className = "formInputContainerRight";
formTitle.className = "formTitle";
signupForm.className = "signupForm";
formLabel.className = "formLabel";
formInput.className = "formInput";
formPrimaryButton.className = "formPrimaryButton";
formSecondaryButton.className = "formSecondaryButton";

// Asignando propiedades a los elementos
formTitle.textContent = signupStrings.title;
formLabel.textContent = signupStrings.username.label;
formInput.type = signupStrings.username.type;
formInput.id = signupStrings.username.id;
formInput.placeholder = signupStrings.username.placeholder;
formInput.addEventListener("keyup", () => {
    formInput.value !== "" ? signupStrings.username.valid = true : signupStrings.username.valid = false;
});
formPrimaryButton.textContent = signupStrings.submit;
formSecondaryButton.textContent = signupStrings.cancel;

// Agregando eventos a los botones
formPrimaryButton.addEventListener("click", () => {
    if (signupStrings.username.valid && signupStrings.left[0].valid && signupStrings.left[1].valid && signupStrings.left[2].valid && signupStrings.right[0].valid && signupStrings.right[1].valid) {
        clearInputs();
        pageRouter(pageModel.list[0]);
    } else {
        alert("Tiene que ingrear correctamente todos los campos");
    }
});

formSecondaryButton.addEventListener("click", () => {
    clearInputs();
    pageRouter(pageModel.list[0]);
});

// Creando los inputs y añadiendolos a los divs
signupStrings.left.forEach(element => {
    const label = document.createElement("p");
    const input = document.createElement("input");

    label.className = "formLabel";
    input.className = "formInput";

    label.textContent = element.label;
    input.type = element.type;
    input.placeholder = element.placeholder;
    input.id = element.id;

    if (input.id === "birthday") {
        input.addEventListener("change", () => {
            input.value !== "" ? element.valid = true : element.valid = false;
        });
    } else {
        input.addEventListener("keyup", () => {
            input.value !== "" ? element.valid = true : element.valid = false;
        });
    }

    formInputContainerLeft.appendChild(label);
    formInputContainerLeft.appendChild(input);
});

signupStrings.right.forEach(element => {
    const label = document.createElement("p");
    const input = document.createElement("input");

    label.className = "formLabel";
    input.className = "formInput";

    label.textContent = element.label;
    input.type = element.type;
    input.placeholder = element.placeholder;
    input.id = element.id;

    if (input.id === "password" || input.id === "confirmPassword") {
        input.addEventListener("keyup", validatePassword);
    } else {
        input.addEventListener("keyup", () => {
            input.value !== "" ? element.valid = true : element.valid = false;
        });
    }

    formInputContainerRight.appendChild(label);
    formInputContainerRight.appendChild(input);
});

// Añadiendo las validaciones de contraseñas al form
validationStrings.passwordValidations.forEach(element => {
    const validation = document.createElement("p");
    validation.className = "formValidation";
    validation.id = element.id;
    validation.textContent = element.label;

    signupValidationsContainer.appendChild(validation);
});


// Añadiendo los elementos a la pantalla de Registro
formContainer.appendChild(formTitle);
signupForm.appendChild(formLabel);
signupForm.appendChild(formInput);
formInputContainerLeft.appendChild(formPrimaryButton);
formInputContainerRight.appendChild(formSecondaryButton);
gridFormInputContainer.appendChild(formInputContainerLeft);
gridFormInputContainer.appendChild(formInputContainerRight);
signupForm.appendChild(gridFormInputContainer);
signupForm.appendChild(signupValidationsContainer);
formContainer.appendChild(signupForm);
screenGrandient.appendChild(formContainer);
signupScreen.appendChild(screenGrandient);

export default signupScreen;