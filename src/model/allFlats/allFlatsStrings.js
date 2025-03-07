import { allFlatsArray } from "./allFlatsArray";
import { allFlatsCitySet } from "./allFlatsFilterCitySet";

export const allFlatsStrings = {
    emptyLabel: "No se a agregado ninún elemento",
    searchBar: {
        placeholder: "Buscar",
        icon: "src/assets/searchIcon.webp"
    },
    toggleButton: {
        tableIconTooltip: "Modo Tabla",
        tableIconOn: "src/assets/tableIconOn.webp",
        tableIconOff: "src/assets/tableIconOff.webp",
        tableIconAlt: "Tabla",
        gridIconTooltip: "Modo Cuadrícula",
        gridIconOn: "src/assets/gridIconOn.webp",
        gridIconOff: "src/assets/gridIconOff.webp",
        gridIconAlt: "Cuadrícula",
    },
    favoriteButton: {
        tooltip: "Mostrar favoritos",
        favoriteIconOn: "src/assets/star.webp",
        favoriteIconOff: "src/assets/starGrey.webp",
        favoriteIconAlt: "Favoritos",
    },
    filter: {
        label: "Filtros",
        filters: [
            {
                label: "Ciudad",
                options: allFlatsCitySet,
            },
            {
                label: "Rango de precio",
                options: ["Todos", "Menos de $100/mes", "Entre $100/mes y $200/mes", "Mayores a $200/mes"],
            },
            {
                label: "Rango de tamaño del área",
                options: ["Todos", "Menos de 100m", "Entre 100m y 200m", "Mayores a 200m"],
            }
        ]
    },
    sort: {
        label: "Orden",
        options: ["Sin Ordenar", "Ciudad", "Precio", "Tamaño del área"],
    },
    labels: {
        city: "Ciudad: ",
        address: "Dirección: ",
        area: "Área: ",
        airConditioning: "Aire acondicionado: ",
        yearBuilt: "Año de construction: ",
        dateAvailable: "Fecha de disponibilidad: ",
        rentPrice: "Precio: ",
    },
    options: {
        yes: "Si",
        no: "No",
    },
    imgAlt: "Card Image",
    favorite: {
        tooltip: "Agregar a favoritos",
        favoriteIcon: "src/assets/star.webp",
        unfavoriteIcon: "src/assets/starGrey.webp",
        alt: "Agregar a favoritos",
    },
    tableHead: ["Nombre", "Ciudad", "Calle", "Número", "Área", "A/C", "Año de construcción", "Fecha de disponibilidad", "Precio de renta", "Foto", "Favoritos"],
    allFlatsArray: allFlatsArray,
    allFlatsFiltered: [],
    filtersOn: {
        cityOn: false,
        priceOn: false,
        areaOn: false,
    }
}