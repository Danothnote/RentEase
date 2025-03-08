export const profileStrings = {
    title: "Perfil de Usuario",
    dialogTitle: "Coloque el nuevo valor para ",
    dialogImgTitle: "Actualice su foto de perfil",
    userImg: {
        label: "Arrastre aquí una foto",
        type: "img",
        alt: "userImg",
        id: "imgUpload",
        valid: false,
    },
    editIcon: {
        src: "src/assets/editIcon.webp",
        alt: "changeIcon",
    },
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
            valid: false,
        },
        {
            label: "Apellido: ",
            placeholder: "Ej: Castillo",
            type: "text",
            id: "lastName",
            valid: false,
        },
        {
            label: "Fecha de nacimiento: ",
            placeholder: "Ej: 1990-01-01",
            type: "date",
            id: "birthday",
            valid: false,
        },
        {
            label: "Email: ",
            placeholder: "Ej: usuario@correo.com",
            type: "email",
            id: "email",
            valid: false,
        },
    ],
    password: {
        label: "Contraseña",
        placeholder: "Ej: Contraseña1*",
        type: "password",
        id: "password",
        valid: false,
    },
    confirmPassword: {
        label: "Confirmar contraseña",
        placeholder: "Ej: Contraseña1*",
        type: "password",
        id: "confirmPassword",
    },
    primaryButton: "Regresar",
    secondaryButton: "Cerrar Sesión",
    dialogPrimaryButton: "Actualizar",
    dialogSecundaryButton: "Cancelar",
    dragImgLabel: "Arrastra y suelta tus fotos aquí",
    dragImgIconSrc: "src/assets/upload.webp",
    dragImgIconAlt: "icon",
    uploadButtonLabel: "Subir fotos",
}