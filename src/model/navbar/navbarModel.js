import { pageModel } from "../pageModel";

export const navBarModel = {
    logo: {
        src: "src/assets/logo.webp",
        alt: "logo"
    },
    avatar: {
        id: "avatar",
        alt: "avatar",
    },
    userDiv: {
        id: "userDiv",
    },
    profileMenu: {
        id: "profileMenu",
    },
    profileLink: {
        label: "Mi Perfil",
        id: "profileLink",
    },
    greetings: {
        label: "Hola, ",
        id: "greetings",
    },
    loginButton: {
        label: "Iniciar Sesión",
        id: "loginButton",
    },
    logoutButton: {
        label: "Cerrar Sesión",
        id: "logoutButton",
    },
    hamburgerButton: {
        src: "src/assets/hamburger.webp",
        alt: "hamburger",
    },
    pages: [
        {
            page: pageModel.list[0],
            label: "Inicio",
            id: "homeLink",
        },
        {
            page: pageModel.list[3],
            label: "Departamentos",
            id: "allFlatsLink",
        },
        {
            page: pageModel.list[4],
            label: "Publica Ya!",
            id: "newFlatLink",
        },
        {
            page: "#footer",
            label: "Nosotros",
            id: "aboutUsLink",
        },
    ]
}