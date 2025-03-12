import { createErrorDialog } from "../components/errorDialog";
import { createLoadingDialog } from "../components/loadingDialog";
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
    const formInputDiv = document.createElement("div");
    const formLabel = document.createElement("p");
    const formInput = document.createElement("input");
    const formTitle = document.createElement("h1");
    const formPrimaryButton = document.createElement("button");
    const formSecondaryButton = document.createElement("button");
    const validationUsernameDiv = validationDiv(signupStrings.username.validation);

    // Asignando clases a los elementos
    signupScreen.className = "signupScreen";
    screenGrandient.className = "containerGradient";
    formContainer.className = "formContainer";
    gridFormInputContainer.className = "gridFormInputContainer";
    formInputContainerLeft.className = "formInputContainerLeft";
    formInputContainerRight.className = "formInputContainerRight";
    formTitle.className = "formTitle";
    signupForm.className = "signupForm";
    formInputDiv.className = "formInputDiv";
    formLabel.className = "formLabel";
    formInput.className = "formInput";
    formButtonsContainer.className = "formButtonsContainer";
    formPrimaryButton.className = "formPrimaryButton";
    formSecondaryButton.className = "formSecondaryButton";

    // Asignando propiedades a los elementos
    formTitle.textContent = signupStrings.title;
    formLabel.textContent = signupStrings.username.label;
    formInput.type = signupStrings.username.type;
    formInput.id = signupStrings.username.id;
    formInput.placeholder = signupStrings.username.placeholder;
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
    formPrimaryButton.textContent = signupStrings.submit;
    formSecondaryButton.textContent = signupStrings.cancel;

    // Agregando eventos a los botones
    formPrimaryButton.addEventListener("click", () => {
        if (signupStrings.username.valid && signupStrings.left[0].valid && signupStrings.left[1].valid && signupStrings.left[2].valid && signupStrings.right[0].valid && signupStrings.right[1].valid) {
            signup(formInput.value, document.getElementById("firstName").value, document.getElementById("lastName").value, document.getElementById("birthday").value, document.getElementById("email").value, document.getElementById("password").value, document.getElementById("confirmPassword").value, loadingDialog, errorDialog);
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
        const inputDiv = document.createElement("div");
        const label = document.createElement("p");
        const input = document.createElement("input");
        const validationInputDiv = validationDiv(element.validation);

        inputDiv.className = "formInputDiv";
        label.className = "formLabel";
        input.className = "formInput";

        label.textContent = element.label;
        input.type = element.type;
        input.placeholder = element.placeholder;
        input.id = element.id;

        input.addEventListener("focus", () => {
            validationInputDiv.style.display = "block";
        })
        input.addEventListener("blur", () => {
            validationInputDiv.style.display = "none";
        });

        if (input.id === "birthday") {
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

        inputDiv.appendChild(label);
        inputDiv.appendChild(input);
        inputDiv.appendChild(validationInputDiv);
        formInputContainerLeft.appendChild(inputDiv);
    });

    signupStrings.right.forEach(element => {
        const inputDiv = document.createElement("div");
        const label = document.createElement("p");
        const input = document.createElement("input");

        inputDiv.className = "formInputDiv";
        label.className = "formLabel";
        input.className = "formInput";

        label.textContent = element.label;
        input.type = element.type;
        input.placeholder = element.placeholder;
        input.id = element.id;

        inputDiv.appendChild(label);
        inputDiv.appendChild(input);

        if (input.id === "password" || input.id === "confirmPassword") {
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
    formInputDiv.appendChild(formLabel);
    formInputDiv.appendChild(formInput);
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