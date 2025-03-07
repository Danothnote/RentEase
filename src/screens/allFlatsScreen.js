import { addCityFilter } from "../functions/allFlats/addCityFilter";
import { addFlatsArray } from "../functions/allFlats/addFlatsArray";
import { favoriteButtonEvent } from "../functions/allFlats/favoriteButtonEvent";
import { filterEvent } from "../functions/allFlats/filterEvent";
import { flatsGrid } from "../functions/allFlats/flatsGrid";
import { resetFilters } from "../functions/allFlats/resetFilters";
import { searchFilter } from "../functions/allFlats/searchFilter";
import { sortEvent } from "../functions/allFlats/sortEvent";
import { styleEvent } from "../functions/allFlats/styleEvent";
import { updateFlats } from "../functions/allFlats/updateFlats";
import { fillSelect } from "../functions/fillSelect";
import { allFlatsStrings } from "../model/allFlats/allFlatsStrings";
import { favoriteFlatsSet } from "../model/allFlats/favoriteFlatsSet";
import { filteredArray } from "../model/allFlats/filteredArray";

const allFlatsScreen = document.createElement("div");
const inputContainer = document.createElement("div");
const searchBar = document.createElement("input");
const filterSideBar = document.createElement("div");
const filterSideBarTitle = document.createElement("h2");
const sortLabel = document.createElement("h2");
const selectSort = document.createElement("select");
const styleButtonDiv = document.createElement("div");
const tableIcon = document.createElement("img");
const gridIcon = document.createElement("img");
const favoriteButton = document.createElement("img");
const flatsFilterContainer = document.createElement("div");
const flatsContainer = document.createElement("div");
const flatsTablePagination = document.createElement("div");

// Agregando clases a los elementos al allFlatsScreen
allFlatsScreen.className = "allFlatsScreen";
inputContainer.className = "flatsInputContainer";
searchBar.className = "searchBar";
sortLabel.className = "formTitle";
selectSort.className = "flatsSelectInput";
styleButtonDiv.className = "toggleStyleButton";
gridIcon.className = "toggleIcon";
gridIcon.classList.add("active");
tableIcon.className = "toggleIcon";
favoriteButton.className = "favoriteButton";
flatsFilterContainer.className = "flatsFilterContainer";
flatsContainer.className = "flatsContainer";
filterSideBar.className = "filterSideBar";
filterSideBarTitle.className = "formTitle";
flatsTablePagination.className = "flatsTablePagination";

// Agregando propiedades a los elementos
searchBar.placeholder = allFlatsStrings.searchBar.placeholder;
tableIcon.src = allFlatsStrings.toggleButton.tableIconOff;
tableIcon.alt = allFlatsStrings.toggleButton.tableIconAlt
gridIcon.src = allFlatsStrings.toggleButton.gridIconOn;
gridIcon.alt = allFlatsStrings.toggleButton.gridIconAlt;
favoriteButton.src = allFlatsStrings.favoriteButton.favoriteIconOff;
favoriteButton.alt = allFlatsStrings.favoriteButton.favoriteIconAlt;
filterSideBarTitle.textContent = allFlatsStrings.filter.label;

// Añadiendo los elementos a la pantalla de allFlatsScreen
addFlatsArray();
addCityFilter();

// Agregando funcionalidad al botón de estilo
styleButtonDiv.addEventListener("click", () => {
    styleEvent(gridIcon, tableIcon);
    if (favoriteButton.classList.contains("active")) {
        updateFlats(gridIcon.classList.contains("active"), favoriteFlatsSet, favoriteButton, flatsContainer);
    } else {
        if (allFlatsStrings.filtersOn.cityOn || allFlatsStrings.filtersOn.priceOn || allFlatsStrings.filtersOn.areaOn || allFlatsStrings.searchOn) {
            updateFlats(gridIcon.classList.contains("active"), allFlatsStrings.allFlatsFiltered, favoriteButton, flatsContainer);
        } else {
            updateFlats(gridIcon.classList.contains("active"), allFlatsStrings.allFlatsArray, favoriteButton, flatsContainer);
        }
    }
});
favoriteButton.addEventListener("click", () => {
    favoriteButtonEvent(favoriteButton);
    resetFilters();
    updateFlats(gridIcon.classList.contains("active"), allFlatsStrings.allFlatsArray, favoriteButton, flatsContainer);
});

// Agregando funcionalidad al botón de búsqueda
searchBar.addEventListener("input", () => {
    searchFilter(searchBar.value.toLowerCase());
    resetFilters();
    updateFlats(gridIcon.classList.contains("active"), allFlatsStrings.allFlatsFiltered, favoriteButton, flatsContainer);
});

// Agregando funcionalidad al selector de filtro
filterSideBar.appendChild(filterSideBarTitle);
allFlatsStrings.filter.filters.forEach(element => {
    const filterTitle = document.createElement("h3");
    const filterSelect = document.createElement("select");

    filterSelect.className = "flatsSelectInput";
    filterTitle.className = "formTitle";

    filterTitle.textContent = element.label;

    fillSelect(element.options, filterSelect);

    filterSideBar.appendChild(filterTitle);
    filterSideBar.appendChild(filterSelect);
    filterSelect.addEventListener("change", () => {
        filterEvent(element, filterSelect.value, filteredArray);
        searchBar.value = "";
        updateFlats(gridIcon.classList.contains("active"), allFlatsStrings.allFlatsFiltered, favoriteButton, flatsContainer);
    })
});

// Agregando funcionalidad al selector de orden
sortLabel.textContent = allFlatsStrings.sort.label;
fillSelect(allFlatsStrings.sort.options, selectSort);

selectSort.addEventListener("change", () => {
    sortEvent(selectSort.value);
    updateFlats(gridIcon.classList.contains("active"), allFlatsStrings.allFlatsArray, favoriteButton, flatsContainer);
});

// Agregando los elementos a la pantalla de allFlatsScreen
inputContainer.appendChild(searchBar);
inputContainer.appendChild(styleButtonDiv);
inputContainer.appendChild(favoriteButton);
styleButtonDiv.appendChild(tableIcon);
styleButtonDiv.appendChild(gridIcon);
flatsContainer.appendChild(flatsGrid(allFlatsStrings.allFlatsArray, favoriteButton, gridIcon.classList.contains("active"), flatsContainer));
filterSideBar.appendChild(sortLabel);
filterSideBar.appendChild(selectSort);
flatsFilterContainer.appendChild(filterSideBar);
flatsFilterContainer.appendChild(flatsContainer);
allFlatsScreen.appendChild(inputContainer);
allFlatsScreen.appendChild(flatsFilterContainer);

export default allFlatsScreen;