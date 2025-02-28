import { validatePassword } from "../functions/validatePassword";
import { signupStrings } from "../model/signupStrings";
import { validationStrings } from "../model/validationStrings";
import landingBanner from "./landingBanner";
import reviews from "./reviews";

// Declarando elementos de la pantalla de Registro
const signupContainer = document.createElement("div");
const signupContainerGradient = document.createElement("div");
const signupFormContainer = document.createElement("div");
const signupTitle = document.createElement("h1");
const signupForm = document.createElement("form");
const signupInputContainer = document.createElement("div");
const signupInputContainerLeft = document.createElement("div");
const signupInputContainerRight = document.createElement("div");
const signupValidationsContainer = document.createElement("div");
const signupLabelUsername = document.createElement("p");
const signupInputUsername = document.createElement("input");
const signupPrimaryButton = document.createElement("button");
const signupSecondaryButton = document.createElement("button");

// Asignando clases a los elementos
signupContainer.className = "signupContainer";
signupContainerGradient.className = "containerGradient";
signupFormContainer.className = "signupFormContainer";
signupInputContainer.className = "signupInputContainer";
signupInputContainerLeft.className = "signupInputContainerLeft";
signupInputContainerRight.className = "signupInputContainerRight";
signupTitle.className = "signupTitle";
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
signupPrimaryButton.type = "button";
signupPrimaryButton.addEventListener("click", () => {
    if (signupStrings.username.valid && signupStrings.left[0].valid && signupStrings.left[1].valid && signupStrings.left[2].valid && signupStrings.right[0].valid && signupStrings.right[1].valid) {
        document.querySelector("#app").removeChild(signupContainer);
        document.querySelector("#app").insertBefore(landingBanner, document.querySelector(".footer") );
        document.querySelector("#app").insertBefore(reviews, document.querySelector(".footer"));
    } else {
        alert("Tiene que ingrear correctamente todos los campos");
    }
});
signupSecondaryButton.textContent = signupStrings.cancel;

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
signupContainer.appendChild(signupContainerGradient);
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
signupContainer.appendChild(signupFormContainer);

export default signupContainer;