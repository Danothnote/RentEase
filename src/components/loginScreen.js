import { pageRouter } from "../functions/pageRouter";
import { loginStrings } from "../model/loginStrings";
import { pageModel } from "../model/pageModel";

const loginScreen = document.createElement('div');
const loginScreenGradient = document.createElement("div");
const loginFormContainer = document.createElement("div");
const loginTitle = document.createElement("h1");
const loginInputContainer = document.createElement("div");
const loginLabelUsername = document.createElement("p");
const loginInputUsername = document.createElement("input");
const loginLabelPassword = document.createElement("p");
const loginInputPassword = document.createElement("input");
const loginPrimaryButton = document.createElement("button");
const loginSecondaryButton = document.createElement("button");

// Agregando clases a los elementos al login screen
loginScreen.className = "loginScreen";
loginScreenGradient.className = "containerGradient";
loginFormContainer.className = "loginFormContainer";
loginTitle.className = "formTitle";
loginInputContainer.className = "loginInputContainer";
loginLabelUsername.className = "formLabel";
loginInputUsername.className = "formInput";
loginLabelPassword.className = "formLabel";
loginInputPassword.className = "formInput";
loginPrimaryButton.className = "formPrimaryButton";
loginSecondaryButton.className = "formSecondaryButton";

// Agregando propiedades a los elementos
loginTitle.textContent = loginStrings.title;
loginLabelUsername.textContent = loginStrings.username.label;
loginInputUsername.type = loginStrings.username.type;
loginInputUsername.id = loginStrings.username.id;
loginInputUsername.placeholder = loginStrings.username.placeholder;
loginLabelPassword.textContent = loginStrings.password.label;
loginInputPassword.type = loginStrings.password.type;
loginInputPassword.id = loginStrings.password.id;
loginInputPassword.placeholder = loginStrings.password.placeholder;
loginPrimaryButton.textContent = loginStrings.submit;
loginSecondaryButton.textContent = loginStrings.signup;

// Agregando eventos a los botones
loginPrimaryButton.addEventListener("click", () => {
    if (loginStrings.username.valid && loginStrings.password.valid) {
        pageRouter(pageModel.list[0]);
    } else {
        alert("Tiene que ingrear correctamente todos los campos");
    }
});

loginSecondaryButton.addEventListener("click", () => {
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
loginFormContainer.appendChild(loginTitle);
loginFormContainer.appendChild(loginInputContainer);
loginInputContainer.appendChild(loginLabelUsername);
loginInputContainer.appendChild(loginInputUsername);
loginInputContainer.appendChild(loginLabelPassword);
loginInputContainer.appendChild(loginInputPassword);
loginFormContainer.appendChild(loginPrimaryButton);
loginFormContainer.appendChild(loginSecondaryButton);
loginScreenGradient.appendChild(loginFormContainer);
loginScreen.appendChild(loginScreenGradient);

export default loginScreen;