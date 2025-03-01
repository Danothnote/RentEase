import { clearInputs } from "../functions/clearInputs";
import { pageRouter } from "../functions/pageRouter";
import { loginStrings } from "../model/loginStrings";
import { pageModel } from "../model/pageModel";

// Declarando elementos de la pantalla de Login
const loginScreen = document.createElement('div');
const screenGrandient = document.createElement("div");
const formContainer = document.createElement("div");
const formTitle = document.createElement("h1");
const formInputContainer = document.createElement("div");
const loginLabelUsername = document.createElement("p");
const loginInputUsername = document.createElement("input");
const loginLabelPassword = document.createElement("p");
const loginInputPassword = document.createElement("input");
const formPrimaryButton = document.createElement("button");
const formSecondaryButton = document.createElement("button");

// Agregando clases a los elementos al login screen
loginScreen.className = "loginScreen";
screenGrandient.className = "containerGradient";
formContainer.className = "formContainer";
formTitle.className = "formTitle";
formInputContainer.className = "formInputContainer";
loginLabelUsername.className = "formLabel";
loginInputUsername.className = "formInput";
loginLabelPassword.className = "formLabel";
loginInputPassword.className = "formInput";
formPrimaryButton.className = "formPrimaryButton";
formSecondaryButton.className = "formSecondaryButton";

// Agregando propiedades a los elementos
formTitle.textContent = loginStrings.title;
loginLabelUsername.textContent = loginStrings.username.label;
loginInputUsername.type = loginStrings.username.type;
loginInputUsername.id = loginStrings.username.id;
loginInputUsername.placeholder = loginStrings.username.placeholder;
loginLabelPassword.textContent = loginStrings.password.label;
loginInputPassword.type = loginStrings.password.type;
loginInputPassword.id = loginStrings.password.id;
loginInputPassword.placeholder = loginStrings.password.placeholder;
formPrimaryButton.textContent = loginStrings.submit;
formSecondaryButton.textContent = loginStrings.signup;

// Agregando eventos a los botones
formPrimaryButton.addEventListener("click", () => {
    if (loginStrings.username.valid && loginStrings.password.valid) {
        clearInputs();
        pageRouter(pageModel.list[0]);
    } else {
        alert("Tiene que ingrear correctamente todos los campos");
    }
});

formSecondaryButton.addEventListener("click", () => {
    clearInputs();
    pageRouter(pageModel.list[2]);
});

// Validando el input del username
loginInputUsername.addEventListener("keyup", () => {
    loginInputUsername.value!== ""? loginStrings.username.valid = true : loginStrings.username.valid = false;
});

// Validando el input del password
loginInputPassword.addEventListener("keyup", () => {
    loginInputPassword.value!== ""? loginStrings.password.valid = true : loginStrings.password.valid = false;
});

// Agregando los elementos al login screen
formContainer.appendChild(formTitle);
formContainer.appendChild(formInputContainer);
formInputContainer.appendChild(loginLabelUsername);
formInputContainer.appendChild(loginInputUsername);
formInputContainer.appendChild(loginLabelPassword);
formInputContainer.appendChild(loginInputPassword);
formContainer.appendChild(formPrimaryButton);
formContainer.appendChild(formSecondaryButton);
screenGrandient.appendChild(formContainer);
loginScreen.appendChild(screenGrandient);

export default loginScreen;