export const newFlatStrings = {
    title: "Publica tu departamento",
    left: [
        {
            label: "Suba fotos del departamento",
            type: "img",
            alt: "flatImg",
            id: "imgUpload",
            valid: false,
        },
        {
            label: "Área",
            placeholder: "Ej: 150m",
            type: "number",
            id: "area",
            valid: false,
        },
        {
            label: "Año de construcción",
            placeholder: "Ej: 2018",
            min: 1900,
            max: 2025,
            type: "number",
            id: "yearBuilt",
            valid: false,
        },
        {
            label: "Fecha de disponibilidad",
            placeholder: "Ej: 01-01-2025",
            type: "date",
            id: "dateAvailable",
            valid: false,
        },
    ],
    right: [
        {
            label: "Nombre",
            placeholder: "Ej: Departamento 1",
            type: "text",
            id: "flatName",
            valid: false,
        },
        {
            label: "Ciudad",
            placeholder: "Ej: Quito",
            type: "text",
            id: "city",
            valid: false,
        },
        {
            label: "Calle",
            placeholder: "Ej: Ruta 101",
            type: "text",
            id: "street",
            valid: false,
        },
        {
            label: "Número",
            placeholder: "Ej: N48-16",
            type: "text",
            id: "streetNumber",
            valid: false,
        },
        {
            label: "Aire Acondicionado",
            placeholder: "Ej: Si",
            type: "select",
            options: ["Si", "No"],
            id: "airConditioning",
            valid: true,
        },
        {
            label: "Precio de Renta",
            placeholder: "Ej: $150",
            type: "number",
            id: "rentPrice",
            valid: false,
        },
    ],
    primary: "Publicar",
    secondary: "Cancelar",
    dropImgLabel: "Arrastra y suelta tus fotos aquí",
    dropImgIconSrc: "src/assets/upload.webp",
    dropImgIconAlt: "icon",
    uploadButtonLabel: "Subir fotos",
    uploadButtonID: "uploadButton",
}