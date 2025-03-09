import { isLoggedIn } from "../functions/isLoggedIn";
import { pageRouter } from "../functions/pageRouter";
import { logout } from "../functions/pocketbase/logout";
import { navBarModel } from "../model/navbar/navbarModel";
import { pageModel } from "../model/pageModel";
import { profileStrings } from "../model/profile/profileStrings";

// Declaración de elementos del navbar
const navbar = document.createElement("div");
const logoLink = document.createElement("a");
const logo = document.createElement("img");
export const sections = document.createElement("div");
export const avatar = document.createElement("img");
export const loginButton = document.createElement("button");
const user = JSON.parse(localStorage.getItem("auth"));

// Agregando clases a los elementos al navbar
navbar.className = "navbar";
logoLink.className = "logoLink";
logo.className = "logo";
sections.className = "sections";
avatar.className = "avatar";
avatar.id = "avatar";
isLoggedIn() ? avatar.style.display = "block" : avatar.style.display = "none";
loginButton.className = "loginButton";
loginButton.id = "loginButton";
isLoggedIn() ? loginButton.style.display = "none" : loginButton.style.display = "true";

// Agregando funcionalidad al boton de inicio de sesión
loginButton.textContent = "Iniciar Sesión";
loginButton.addEventListener("click", () => {
    pageRouter(pageModel.list[1]);
});

//Agregando funcionalidad al avatar
user ? avatar.src = user.profileImg : avatar.src = profileStrings.userImg.src;
avatar.alt = "avatar";
avatar.addEventListener("click", () => {
    logout();
});

// Agregando logo y su funcionalidad
logoLink.addEventListener("click", () => {
    pageRouter(pageModel.list[5]);
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
    if (element.label === "Publica Ya!") {
        section.id = "newFlatLink";
        isLoggedIn() ? section.style.display = "block" : section.style.display = "none";
    }
    section.style.cursor = "pointer";
    section.textContent = element.label;
    sections.appendChild(section);
})

//Insertando todos los elementos al navbar
logoLink.appendChild(logo);
navbar.appendChild(logoLink);
sections.appendChild(avatar);
sections.appendChild(loginButton);
navbar.appendChild(sections);

export default navbar;