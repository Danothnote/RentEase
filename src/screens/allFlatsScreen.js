import { createInput } from "../components/input";
import { createTitle } from "../components/title";
import { favoriteButtonEvent } from "../functions/allFlats/favoriteButtonEvent";
import { filterEvent } from "../functions/allFlats/filterEvent";
import { flatsGrid } from "../functions/allFlats/flatsGrid";
import { resetFilters } from "../functions/allFlats/resetFilters";
import { searchFilter } from "../functions/allFlats/searchFilter";
import { sortEvent } from "../functions/allFlats/sortEvent";
import { styleEvent } from "../functions/allFlats/styleEvent";
import { updateFlats } from "../functions/allFlats/updateFlats";
import { allFlatsStrings } from "../model/allFlats/allFlatsStrings";
import { favoriteFlatsSet } from "../model/allFlats/favoriteFlatsSet";
import { filteredArray } from "../model/allFlats/filteredArray";
import { menuShowModel } from "../model/navbar/menuShowModel";

export const createAllFlatsScreen = () => {
    const allFlatsScreen = document.createElement("div");
    const inputContainer = document.createElement("div");
    const searchBar = createInput("", allFlatsStrings.searchBar.placeholder, allFlatsStrings.searchBar.type, allFlatsStrings.searchBar.id).childNodes[0];
    const filterSideBar = document.createElement("div");
    const filterIcon = document.createElement("img");
    const filterSideBarTitle = createTitle(allFlatsStrings.filter.label, "h2");
    const selectSort = createInput(allFlatsStrings.sort.label, "", allFlatsStrings.sort.type, allFlatsStrings.sort.id, allFlatsStrings.sort.options, true);
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
    styleButtonDiv.className = "toggleStyleButton";
    gridIcon.className = "toggleIcon";
    gridIcon.classList.add("active");
    tableIcon.className = "toggleIcon";
    favoriteButton.className = "favoriteButton";
    flatsFilterContainer.className = "flatsFilterContainer";
    flatsContainer.className = "flatsContainer";
    filterSideBar.className = "filterSideBar";
    filterSideBar.classList.add("slide-in");
    filterIcon.className = "filterIcon";
    flatsTablePagination.className = "flatsTablePagination";

    // Agregando propiedades a los elementos
    tableIcon.src = allFlatsStrings.toggleButton.tableIconOff;
    tableIcon.alt = allFlatsStrings.toggleButton.tableIconAlt;
    gridIcon.src = allFlatsStrings.toggleButton.gridIconOn;
    gridIcon.alt = allFlatsStrings.toggleButton.gridIconAlt;
    favoriteButton.src = allFlatsStrings.favoriteButton.favoriteIconOff;
    favoriteButton.alt = allFlatsStrings.favoriteButton.favoriteIconAlt;
    filterIcon.src = allFlatsStrings.filter.iconSrc;
    filterIcon.alt = allFlatsStrings.filter.iconAlt;

    // Agregando funcionalidad al botón de estilo
    styleButtonDiv.addEventListener("click", () => {
        styleEvent(gridIcon, tableIcon);
        if (favoriteButton.classList.contains("active")) {
            updateFlats(gridIcon.classList.contains("active"), favoriteFlatsSet, favoriteButton, flatsContainer);
        } else {
            if (allFlatsStrings.filtersOn.cityOn || allFlatsStrings.filtersOn.priceOn || allFlatsStrings.filtersOn.areaOn || allFlatsStrings.searchOn) {
                updateFlats(gridIcon.classList.contains("active"), allFlatsStrings.allFlatsFiltered, favoriteButton, flatsContainer);
            } else {
                updateFlats(gridIcon.classList.contains("active"), Array.from(allFlatsStrings.allFlatsArray), favoriteButton, flatsContainer);
            }
        }
    });

    favoriteButton.addEventListener("click", () => {
        favoriteButtonEvent(favoriteButton);
        resetFilters();
        updateFlats(gridIcon.classList.contains("active"), Array.from(allFlatsStrings.allFlatsArray), favoriteButton, flatsContainer);
    });

    // Agregando funcionalidad al botón de búsqueda
    searchBar.addEventListener("input", () => {
        searchFilter(searchBar.value.toLowerCase());
        resetFilters();
        updateFlats(gridIcon.classList.contains("active"), allFlatsStrings.allFlatsFiltered, favoriteButton, flatsContainer);
    });

    filterIcon.addEventListener("click", () => {
        menuShowModel.allFlatsSidebar = !menuShowModel.allFlatsSidebar;
        filterSideBar.style.display = menuShowModel.allFlatsSidebar ? "none" : "block";
    });

    // Agregando funcionalidad al selector de filtro
    filterSideBar.appendChild(filterSideBarTitle);
    allFlatsStrings.filter.filters.forEach(element => {
        const filterDiv = createInput(element.label, "", element.type, element.id, element.options, true, true)
        const filterSelect = filterDiv.childNodes[1];

        filterSideBar.appendChild(filterDiv);
        filterSelect.addEventListener("change", () => {
            filterEvent(element, filterSelect.value, filteredArray);
            searchBar.value = "";
            updateFlats(gridIcon.classList.contains("active"), allFlatsStrings.allFlatsFiltered, favoriteButton, flatsContainer);
        })
    });

    // Agregando funcionalidad al selector de orden
    selectSort.childNodes[1].addEventListener("change", () => {
        sortEvent(selectSort.childNodes[1].value);
        updateFlats(gridIcon.classList.contains("active"), Array.from(allFlatsStrings.allFlatsArray), favoriteButton, flatsContainer);
    });

    if (menuShowModel.mediaQ527.matches) {
        menuShowModel.allFlatsSidebar = true;
    }

    menuShowModel.mediaQ527.onchange = (event) => {
        if (event.matches) {
            filterSideBar.style.display = "none";
            menuShowModel.allFlatsSidebar = true;
        } else {
            menuShowModel.allFlatsSidebar = false;
            filterSideBar.style.display = "block";
        }
    };

    // Agregando los elementos a la pantalla de allFlatsScreen
    inputContainer.appendChild(filterIcon);
    inputContainer.appendChild(searchBar);
    inputContainer.appendChild(styleButtonDiv);
    inputContainer.appendChild(favoriteButton);
    styleButtonDiv.appendChild(tableIcon);
    styleButtonDiv.appendChild(gridIcon);
    flatsContainer.appendChild(flatsGrid(Array.from(allFlatsStrings.allFlatsArray), favoriteButton, gridIcon.classList.contains("active"), flatsContainer));
    filterSideBar.appendChild(selectSort);
    flatsFilterContainer.appendChild(filterSideBar);
    flatsFilterContainer.appendChild(flatsContainer);
    allFlatsScreen.appendChild(inputContainer);
    allFlatsScreen.appendChild(flatsFilterContainer);

    return allFlatsScreen;
}