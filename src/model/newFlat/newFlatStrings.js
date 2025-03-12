export const newFlatStrings = {
    title: "Publica tu departamento",
    left: [
        {
            label: "Suba fotos del departamento",
            labelMobile: "Seleccione un archivo aquí",
            uploadButtonLabel: "O seleccione un archivo aquí",
            type: "img",
            alt: "flatImg",
            id: "imgUpload",
            valid: false,
        },
        {
            label: "Área",
            placeholder: "Ej: 150m²",
            type: "number",
            min: 40,
            id: "area",
            valid: false,
            validation: [`Debe ser mayor o igual a 40m²`],
        },
        {
            label: "Año de construcción",
            placeholder: "Ej: 2018",
            min: 1800,
            max: new Date().getFullYear(),
            type: "number",
            id: "yearBuilt",
            valid: false,
            validation: ["Debe ser posterior al año 1800"],
        },
        {
            label: "Fecha de disponibilidad",
            placeholder: "Ej: 01-01-2025",
            min: new Date().toISOString().split('T')[0],
            type: "date",
            id: "dateAvailable",
            valid: false,
            validation: ["Debe ser posterior a la fecha actual"],
        },
    ],
    right: [
        {
            label: "Nombre",
            placeholder: "Ej: Departamento 1",
            type: "text",
            id: "flatName",
            valid: false,
            validation: ["Debe tener al menos 2 caracteres"],
        },
        {
            label: "Ciudad",
            placeholder: "Ej: Quito",
            type: "text",
            id: "city",
            valid: false,
            validation: ["Debe tener al menos 2 caracteres"],
        },
        {
            label: "Calle",
            placeholder: "Ej: Ruta 101",
            type: "text",
            id: "street",
            valid: false,
            validation: ["Debe tener al menos 2 caracteres"],
        },
        {
            label: "Número",
            placeholder: "Ej: N48-16",
            type: "text",
            id: "streetNumber",
            valid: false,
            validation: ["Debe tener al menos 2 caracteres"],
        },
        {
            label: "Aire Acondicionado",
            placeholder: "Ej: Si",
            type: "select",
            options: ["No", "Si"],
            id: "airConditioning",
            valid: true,
        },
        {
            label: "Precio de Renta",
            placeholder: "Ej: $150",
            type: "number",
            id: "rentPrice",
            valid: false,
            validation: ["Debe ser mayor a $0"],
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