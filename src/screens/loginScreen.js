import { createErrorDialog } from "../components/errorDialog";
import { createLoadingDialog } from "../components/loadingDialog";
import { createButton } from "../components/button";
import { clearInputs } from "../functions/clearInputs";
import { pageRouter } from "../functions/pageRouter";
import { login } from "../functions/pocketbase/login";
import { loginStrings } from "../model/login/loginStrings";
import { pageModel } from "../model/pageModel";
import { createInput } from "../components/input";
import { createTitle } from "../components/title";

export const createLoginScreen = () => {
    // Declarando elementos de la pantalla de Login
    const loginScreen = document.createElement('div');
    const screenGrandient = document.createElement("div");
    const loadingDialog = createLoadingDialog();
    const errorDialog = createErrorDialog();
    const formContainer = document.createElement("div");
    const formInputContainer = document.createElement("div");
    const formTitle = createTitle(loginStrings.title, "h1")
    const loginInputUsername = createInput(loginStrings.username.label, loginStrings.username.placeholder, loginStrings.username.type, loginStrings.username.id);
    const loginInputPassword = createInput(loginStrings.password.label, loginStrings.password.placeholder, loginStrings.password.type, loginStrings.password.id);
    const formPrimaryButton = createButton(loginStrings.primaryButton, true);
    const formSecondaryButton = createButton(loginStrings.secondaryButton, false);

    const usernameInput = loginInputUsername.childNodes[1];
    const passwordInput = loginInputPassword.childNodes[1];

    // Agregando clases a los elementos al login screen
    loginScreen.className = "loginScreen";
    screenGrandient.className = "containerGradient";
    formContainer.className = "formContainer";
    formInputContainer.className = "formInputContainer";

    // Agregando propiedades a los elementos
    formPrimaryButton.disabled = true;

    // Agregando eventos a los botones
    formPrimaryButton.addEventListener("click", async () => {
        login(usernameInput.value, passwordInput.value, loadingDialog, errorDialog);
    });

    formSecondaryButton.addEventListener("click", () => {
        clearInputs();
        pageRouter(pageModel.list[2]);
    });

    // Validando el input del username
    usernameInput.addEventListener("input", () => {
        usernameInput.value = usernameInput.value.toLowerCase();
        usernameInput.value !== "" ? loginStrings.username.valid = true : loginStrings.username.valid = false;
        loginStrings.username.valid && loginStrings.password.valid ? formPrimaryButton.disabled = false : formPrimaryButton.disabled = true;
    });

    // Validando el input del password
    passwordInput.addEventListener("input", () => {
        passwordInput.value !== "" ? loginStrings.password.valid = true : loginStrings.password.valid = false;
        loginStrings.username.valid && loginStrings.password.valid ? formPrimaryButton.disabled = false : formPrimaryButton.disabled = true;
    });

    // Agregando los elementos al login screen
    formContainer.appendChild(formTitle);
    formContainer.appendChild(formInputContainer);
    formInputContainer.appendChild(loginInputUsername);
    formInputContainer.appendChild(loginInputPassword);
    formContainer.appendChild(formPrimaryButton);
    formContainer.appendChild(formSecondaryButton);
    screenGrandient.appendChild(loadingDialog);
    screenGrandient.appendChild(errorDialog);
    screenGrandient.appendChild(formContainer);
    loginScreen.appendChild(screenGrandient);

    return loginScreen;
}