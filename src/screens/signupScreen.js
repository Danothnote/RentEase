import { createErrorDialog } from "../components/errorDialog";
import { createLoadingDialog } from "../components/loadingDialog";
import { createButton } from "../components/button";
import { validationDiv } from "../components/validationDiv";
import { clearInputs } from "../functions/clearInputs";
import { pageRouter } from "../functions/pageRouter";
import { signup } from "../functions/pocketbase/signup";
import { validatePassword } from "../functions/signup/validatePassword";
import { errorDialogStrings } from "../model/errorDialogStrings";
import { errorStrings } from "../model/errorStrings";
import { pageModel } from "../model/pageModel";
import { signupStrings } from "../model/signup/signupStrings";
import { validationStrings } from "../model/signup/validationStrings";
import { validateTypes } from "../model/validateTypes";
import { createInput } from "../components/input";
import { createTitle } from "../components/title";

export const createSignupScreen = () => {
    // Declarando elementos de la pantalla de Registro
    const signupScreen = document.createElement("div");
    const signupForm = document.createElement("div");
    const signupValidationsContainer = document.createElement("div");
    const screenGrandient = document.createElement("div");
    const loadingDialog = createLoadingDialog();
    const errorDialog = createErrorDialog();
    const formContainer = document.createElement("div");
    const gridFormInputContainer = document.createElement("div");
    const formInputContainerLeft = document.createElement("div");
    const formInputContainerRight = document.createElement("div");
    const formButtonsContainer = document.createElement("div");
    const formInputDiv = createInput(signupStrings.username.label, signupStrings.username.placeholder, signupStrings.username.type, signupStrings.username.id);
    const formTitle = createTitle(signupStrings.title, "h1")
    const formPrimaryButton = createButton(signupStrings.primaryButton, true);
    const formSecondaryButton = createButton(signupStrings.secondaryButton, false);
    const validationUsernameDiv = validationDiv(signupStrings.username.validation);

    const formInput = formInputDiv.childNodes[1];

    // Asignando clases a los elementos
    signupScreen.className = "signupScreen";
    screenGrandient.className = "containerGradient";
    formContainer.className = "formContainer";
    gridFormInputContainer.className = "gridFormInputContainer";
    formInputContainerLeft.className = "formInputContainerLeft";
    formInputContainerRight.className = "formInputContainerRight";
    signupForm.className = "signupForm";
    formButtonsContainer.className = "formButtonsContainer";

    // Asignando propiedades a los elementos
    formPrimaryButton.disabled = true;

    formInput.addEventListener("focus", () => {
        validationUsernameDiv.style.display = "block";
    })
    formInput.addEventListener("blur", () => {
        validationUsernameDiv.style.display = "none";
    });
    formInput.addEventListener("keyup", () => {
        formInput.value = formInput.value.toLowerCase();
        if (formInput.value !== "" && formInput.value.length >= 2) {
            signupStrings.username.valid = true;
            validationUsernameDiv.style.display = "none";
            signupStrings.username.valid && signupStrings.left.every(input => input.valid) && signupStrings.right.every(input => input.valid) ? formPrimaryButton.disabled = false : formPrimaryButton.disabled = true;
        } else {
            signupStrings.username.valid = false;
            validationUsernameDiv.style.display = "block";
            formPrimaryButton.disabled = true;
        }
    });

    // Agregando eventos a los botones
    formPrimaryButton.addEventListener("click", () => {
        if (signupStrings.username.valid && signupStrings.left[0].valid && signupStrings.left[1].valid && signupStrings.left[2].valid && signupStrings.right[0].valid && signupStrings.right[1].valid) {
            signup(formInput.value, document.getElementById(`${signupStrings.left[0].id}Input`).value, document.getElementById(`${signupStrings.left[1].id}Input`).value, document.getElementById(`${signupStrings.left[2].id}Input`).value, document.getElementById(`${signupStrings.right[0].id}Input`).value, document.getElementById(`${signupStrings.right[1].id}Input`).value, document.getElementById(`${signupStrings.right[2].id}Input`).value, loadingDialog, errorDialog);
        } else {
            document.getElementById(errorDialogStrings.messageID).textContent = errorStrings.fillInputsError.label;
            errorDialog.showModal();
        }
    });

    formSecondaryButton.addEventListener("click", () => {
        signupStrings.username.valid = false;
        signupStrings.left.forEach(element => {
            element.valid = false;
        });
        signupStrings.right.forEach(element => {
            element.valid = false;
        });
        clearInputs();
        pageRouter(pageModel.list[0]);
    });

    // Creando los inputs y añadiendolos a los divs
    signupStrings.left.forEach(element => {
        const inputDiv = createInput(element.label, element.placeholder, element.type, element.id)
        const validationInputDiv = validationDiv(element.validation);
        const input = inputDiv.childNodes[1];

        input.addEventListener("focus", () => {
            validationInputDiv.style.display = "block";
        })
        input.addEventListener("blur", () => {
            validationInputDiv.style.display = "none";
        });

        if (element.id === signupStrings.left[2].id) {
            input.min = signupStrings.left[2].min;
            input.max = signupStrings.left[2].max;

            input.addEventListener("input", () => {
                if (input.value !== "" && input.value >= signupStrings.left[2].min && input.value <= signupStrings.left[2].max) {
                    element.valid = true;
                    validationInputDiv.style.display = "none";
                    signupStrings.username.valid && signupStrings.left.every(input => input.valid) && signupStrings.right.every(input => input.valid) ? formPrimaryButton.disabled = false : formPrimaryButton.disabled = true;
                } else {
                    element.valid = false;
                    validationInputDiv.style.display = "block";
                    formPrimaryButton.disabled = true;
                }
            });
        } else {
            input.addEventListener("input", () => {
                input.value = String(input.value).charAt(0).toUpperCase() + String(input.value).slice(1);
                if (input.value !== "" && input.value.length >= 2) {
                    element.valid = true;
                    validationInputDiv.style.display = "none";
                    signupStrings.username.valid && signupStrings.left.every(input => input.valid) && signupStrings.right.every(input => input.valid) ? formPrimaryButton.disabled = false : formPrimaryButton.disabled = true;
                } else {
                    element.valid = false;
                    validationInputDiv.style.display = "block";
                    formPrimaryButton.disabled = true;
                }
            });
        }

        inputDiv.appendChild(validationInputDiv);
        formInputContainerLeft.appendChild(inputDiv);
    });

    signupStrings.right.forEach(element => {
        const inputDiv = createInput(element.label, element.placeholder, element.type, element.id)
        const input = inputDiv.childNodes[1];

        if (element.id === signupStrings.right[1].id || element.id === signupStrings.right[2].id) {
            input.addEventListener("input", () => {
                validatePassword();
                signupStrings.username.valid && signupStrings.left.every(input => input.valid) && signupStrings.right.every(input => input.valid) ? formPrimaryButton.disabled = false : formPrimaryButton.disabled = true;
            });
        } else {
            const validationInputDiv = validationDiv(element.validation);
            input.addEventListener("focus", () => {
                validationInputDiv.style.display = "block";
            })
            input.addEventListener("blur", () => {
                validationInputDiv.style.display = "none";
            });
            input.addEventListener("input", () => {
                input.value = input.value.toLowerCase();
                if (input.value !== "" && input.value.match(validateTypes.email)) {
                    element.valid = true;
                    validationInputDiv.style.display = "none";
                    signupStrings.username.valid && signupStrings.left.every(input => input.valid) && signupStrings.right.every(input => input.valid) ? formPrimaryButton.disabled = false : formPrimaryButton.disabled = true;
                } else {
                    element.valid = false;
                    validationInputDiv.style.display = "block";
                    formPrimaryButton.disabled = true;
                }
            });
            inputDiv.appendChild(validationInputDiv);
        }
        formInputContainerRight.appendChild(inputDiv);
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
    formInputDiv.appendChild(validationUsernameDiv);
    signupForm.appendChild(formInputDiv);
    formButtonsContainer.appendChild(formPrimaryButton);
    formButtonsContainer.appendChild(formSecondaryButton);
    gridFormInputContainer.appendChild(formInputContainerLeft);
    gridFormInputContainer.appendChild(formInputContainerRight);
    signupForm.appendChild(gridFormInputContainer);
    signupForm.appendChild(formButtonsContainer);
    signupForm.appendChild(signupValidationsContainer);
    formContainer.appendChild(signupForm);
    screenGrandient.appendChild(loadingDialog);
    screenGrandient.appendChild(errorDialog);
    screenGrandient.appendChild(formContainer);
    signupScreen.appendChild(screenGrandient);

    return signupScreen;
}