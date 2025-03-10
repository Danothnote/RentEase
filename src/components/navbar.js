import { verifyLoggedState } from "../functions/navbar/verifyLoggedState";
import { pageRouter } from "../functions/pageRouter";
import { logout } from "../functions/pocketbase/logout";
import { navBarModel } from "../model/navbar/navbarModel";
import { pageModel } from "../model/pageModel";
import { userData } from "../model/userData";

export const createNavbar = () => {
    // Declaración de elementos del navbar
    const navbar = document.createElement("div");
    const logoLink = document.createElement("a");
    const logo = document.createElement("img");
    const sections = document.createElement("div");
    const userDiv = document.createElement("div");
    const avatar = document.createElement("img");
    const greetings = document.createElement("span");
    const profileMenu = document.createElement("div");
    const logoutButton = document.createElement("a");
    const profileLink = document.createElement("a");
    const loginButton = document.createElement("button");

    // Agregando clases a los elementos al navbar
    navbar.className = "navbar";
    logoLink.className = "logoLink";
    logo.className = "logo";
    sections.className = "sections";
    userDiv.className = "userDiv";
    greetings.className = "section";
    profileMenu.className = "profileMenu";
    logoutButton.className = "logoutButton";
    profileLink.className = "profileLink";
    avatar.className = "avatar";
    loginButton.className = "loginButton";
    userDiv.id = navBarModel.userDiv.id;
    profileMenu.id = navBarModel.profileMenu.id;
    profileMenu.style.display = "none";
    avatar.id = navBarModel.avatar.id;
    avatar.alt = navBarModel.avatar.alt;
    greetings.textContent = `${navBarModel.greetings.label} ${userData.userClass.firstName} ${userData.userClass.lastName}`;
    greetings.id = navBarModel.greetings.id;
    profileLink.textContent = navBarModel.profileLink.label;
    profileLink.style.cursor = "pointer";
    logoutButton.textContent = navBarModel.logoutButton.label;
    logoutButton.style.cursor = "pointer";
    loginButton.textContent = navBarModel.loginButton.label;
    loginButton.id = navBarModel.loginButton.id;

    // Agregando funcionalidad al menú del usuario
    let menuShow = false;
    userDiv.addEventListener("click", () => {
        menuShow = !menuShow;
        menuShow ? profileMenu.style.display = "block" : profileMenu.style.display = "none";
    });

    // Agregando funcionalidad al boton de inicio de sesión
    loginButton.addEventListener("click", () => {
        pageRouter(pageModel.list[1]);
    });

    if (verifyLoggedState()) {
        userDiv.style.display = "flex";
        loginButton.style.display = "none";
    } else {
        userDiv.style.display = "none";
        loginButton.style.display = "block";
    }

    profileLink.addEventListener("click", () => {
        pageRouter(pageModel.list[5]);
    });

    //Agregando funcionalidad al boton de cerrar sesión
    logoutButton.addEventListener("click", () => {
        logout();
    });

    // Agregando logo y su funcionalidad
    logoLink.addEventListener("click", () => {
        pageRouter(pageModel.list[0]);
    })
    logoLink.style.cursor = "pointer";
    logo.src = navBarModel.logo.src;
    logo.alt = navBarModel.logo.alt;

    //Agregando al navbar los enlaces de las secciones
    navBarModel.pages.forEach(element => {
        const section = document.createElement("a");
        if (element.label === "Nosotros") {
            section.href = element.page;
        } else {
            section.addEventListener("click", () => {
                pageRouter(element.page);
            })
        }
        if (element.label === "Publica Ya!") {
            verifyLoggedState() ? section.style.display = "block" : section.style.display = "none"; 
        }
        section.id = element.id;
        section.style.cursor = "pointer";
        section.textContent = element.label;
        sections.appendChild(section);
    })

    //Insertando todos los elementos al navbar
    logoLink.appendChild(logo);
    profileMenu.appendChild(profileLink);
    profileMenu.appendChild(logoutButton);
    userDiv.appendChild(avatar);
    userDiv.appendChild(greetings);
    userDiv.appendChild(profileMenu);
    sections.appendChild(userDiv);
    sections.appendChild(loginButton);
    navbar.appendChild(logoLink);
    navbar.appendChild(sections);

    return navbar;
}