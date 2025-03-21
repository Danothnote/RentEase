import { substractYears } from "../../functions/signup/substractYears";

export const profileStrings = {
    title: "Perfil de Usuario",
    dialogTitle: "Coloque el nuevo valor para ",
    dialogImgTitle: "Actualice su foto de perfil",
    userImg: {
        type: "img",
        src: "src/assets/imageIcon.webp",
        alt: "userImg",
        id: "profileImg",
        valid: false,
    },
    editIcon: {
        src: "src/assets/editIcon.webp",
        alt: "changeIcon",
    },
    textValidation: ["Debe tener al menos 2 caracteres"],
    dateValidation: ["Debes ser mayor de 18 años"],
    right: [
        {
            label: "Nombre de usuario: ",
            placeholder: "Ej: usuario1",
            type: "text",
            id: "username",
        },
        {
            label: "Nombre: ",
            placeholder: "Ej: Juan",
            type: "text",
            id: "firstName",
        },
        {
            label: "Apellido: ",
            placeholder: "Ej: Castillo",
            type: "text",
            id: "lastName",
        },
        {
            label: "Fecha de nacimiento: ",
            placeholder: "Ej: 1990-01-01",
            min: substractYears(120),
            max: substractYears(18),
            type: "date",
            id: "birthday",
        },
        {
            label: "Email: ",
            placeholder: "Ej: usuario@correo.com",
            type: "email",
            id: "email",
        },
    ],
    primaryButton: "Regresar",
    secondaryButton: "Cerrar Sesión",
    dialogPrimaryButton: "Actualizar",
    dialogSecundaryButton: "Cancelar",
}