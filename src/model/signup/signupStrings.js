export const signupStrings = {
    title: "Registro",
    username: {
        label: "Nombre de Usuario",
        placeholder: "Ej: usuario1",
        type: "text",
        id: "userName",
        valid: false,
    },
    left: [
        {
            label: "Nombre",
            placeholder: "Ej: Juan",
            type: "text",
            id: "firstName",
            valid: false,
        },
        {
            label: "Apellido",
            placeholder: "Ej: Castillo",
            type: "text",
            id: "lastName",
            valid: false,
        },
        {
            label: "Fecha de nacimiento",
            placeholder: "Ej: 1990-01-01",
            type: "date",
            id: "birthday",
            valid: false,
        },
    ],
    right: [
        {
            label: "Email",
            placeholder: "Ej: usuario@correo.com",
            type: "email",
            id: "email",
            valid: false,
        },
        {
            label: "Contraseña",
            placeholder: "Ej: Contraseña1*",
            type: "password",
            id: "password",
            valid: false,
        },
        {
            label: "Confirmar contraseña",
            placeholder: "Ej: Contraseña1*",
            type: "password",
            id: "confirmPassword",
        },
    ],
    submit: "Registrarse",
    cancel: "Cancelar"
}