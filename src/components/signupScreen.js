import { pageRouter } from "../functions/pageRouter";
import { validatePassword } from "../functions/validatePassword";
import { pageModel } from "../model/pageModel";
import { signupStrings } from "../model/signupStrings";
import { validationStrings } from "../model/validationStrings";

// Declarando elementos de la pantalla de Registro
const signupScreen = document.createElement("div");
const signupScreenGradient = document.createElement("div");
const signupFormContainer = document.createElement("div");
const signupTitle = document.createElement("h1");
const signupForm = document.createElement("div");
const signupInputContainer = document.createElement("div");
const signupInputContainerLeft = document.createElement("div");
const signupInputContainerRight = document.createElement("div");
const signupValidationsContainer = document.createElement("div");
const signupLabelUsername = document.createElement("p");
const signupInputUsername = document.createElement("input");
const signupPrimaryButton = document.createElement("button");
const signupSecondaryButton = document.createElement("button");

// Asignando clases a los elementos
signupScreen.className = "signupScreen";
signupScreenGradient.className = "containerGradient";
signupFormContainer.className = "signupFormContainer";
signupInputContainer.className = "signupInputContainer";
signupInputContainerLeft.className = "signupInputContainerLeft";
signupInputContainerRight.className = "signupInputContainerRight";
signupTitle.className = "formTitle";
signupForm.className = "signupForm";
signupLabelUsername.className = "formLabel";
signupInputUsername.className = "formInput";
signupPrimaryButton.className = "formPrimaryButton";
signupSecondaryButton.className = "formSecondaryButton";

// Asignando propiedades a los elementos
signupTitle.textContent = signupStrings.title;
signupLabelUsername.textContent = signupStrings.username.label;
signupInputUsername.type = signupStrings.username.type;
signupInputUsername.id = signupStrings.username.id;
signupInputUsername.placeholder = signupStrings.username.placeholder;
signupInputUsername.addEventListener("keyup", () => {
    signupInputUsername.value !== "" ? signupStrings.username.valid = true : signupStrings.username.valid = false;
});
signupPrimaryButton.textContent = signupStrings.submit;
signupSecondaryButton.textContent = signupStrings.cancel;

// Agregando eventos a los botones
signupPrimaryButton.addEventListener("click", () => {
    if (signupStrings.username.valid && signupStrings.left[0].valid && signupStrings.left[1].valid && signupStrings.left[2].valid && signupStrings.right[0].valid && signupStrings.right[1].valid) {
        pageRouter(pageModel.list[0]);
    } else {
        alert("Tiene que ingrear correctamente todos los campos");
    }
});

signupSecondaryButton.addEventListener("click", () => pageRouter(pageModel.list[0]));

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

    signupInputContainerLeft.appendChild(label);
    signupInputContainerLeft.appendChild(input);
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

    signupInputContainerRight.appendChild(label);
    signupInputContainerRight.appendChild(input);
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
signupFormContainer.appendChild(signupTitle);
signupForm.appendChild(signupLabelUsername);
signupForm.appendChild(signupInputUsername);
signupInputContainerLeft.appendChild(signupPrimaryButton);
signupInputContainerRight.appendChild(signupSecondaryButton);
signupInputContainer.appendChild(signupInputContainerLeft);
signupInputContainer.appendChild(signupInputContainerRight);
signupForm.appendChild(signupInputContainer);
signupForm.appendChild(signupValidationsContainer);
signupFormContainer.appendChild(signupForm);
signupScreenGradient.appendChild(signupFormContainer);
signupScreen.appendChild(signupScreenGradient);

export default signupScreen;