import { loginFun, loginState } from "../functions/login/login";
import { pageRouter } from "../functions/pageRouter";
import { navBarModel } from "../model/navbar/navbarModel";
import { pageModel } from "../model/pageModel";

// Declaración de elementos del navbar
const navbar = document.createElement("div");
const logoLink = document.createElement("a");
const logo = document.createElement("img");
export const sections = document.createElement("div");
export const avatar = document.createElement("img");
export const loginButton = document.createElement("button");

// Agregando clases a los elementos al navbar
navbar.className = "navbar";
logoLink.className = "logoLink";
logo.className = "logo";
sections.className = "sections";
avatar.className = "avatar";
loginButton.className = "loginButton";

// Agregando funcionalidad al boton de inicio de sesión
loginButton.textContent = "Iniciar Sesión";
loginButton.addEventListener("click", () => {
    pageRouter(pageModel.list[1]);
});

//Agregando funcionalidad al avatar
avatar.src = "src/assets/avatar.avif";
avatar.alt = "avatar";
avatar.addEventListener("click", loginFun);

// Agregando logo y su funcionalidad
logoLink.addEventListener("click", () => {
    pageRouter(pageModel.list[0]);
})
logoLink.style.cursor = "pointer";
logo.src = "src/assets/logo.webp";
logo.alt = "logo";

//Agregando al navbar los enlaces de las secciones
navBarModel.forEach(element => {
    const section = document.createElement("a");
    if (element.label === "Nosotros") {
        section.href = element.page;
    } else {
        section.addEventListener("click", () => {
            pageRouter(element.page);
        })
    }
    section.style.cursor = "pointer";
    section.textContent = element.label;
    sections.appendChild(section);
})

//Insertando todos los elementos al navbar
logoLink.appendChild(logo);
navbar.appendChild(logoLink);
loginState ? sections.appendChild(avatar) : sections.appendChild(loginButton);
navbar.appendChild(sections);

export default navbar;