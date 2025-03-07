import { allFlatsStrings } from "../../model/allFlats/allFlatsStrings";
import { favoriteFlatsSet } from "../../model/allFlats/favoriteFlatsSet";
import { favoriteEvent } from "./favoriteEvent";
import { updateFlats } from "./updateFlats";

export const flatsTable = (array, favoriteButton, grid, flatsContainer) => {
    const flatsTable = document.createElement("div");
    const table = document.createElement("table");
    const flatsTableHead = document.createElement("thead");
    const flatsTableBody = document.createElement("tbody");

    flatsTable.className = "flatsTableDiv";
    table.className = "flatsTable";
    flatsTableHead.className = "flatsTableHead";
    flatsTableBody.className = "flatsTableBody";

    if (typeof array !== 'undefined' && array.length !== 0 && array.size !== 0) {
        const trHead = document.createElement("tr");
        trHead.className = "trHead";

        allFlatsStrings.tableHead.forEach(data => {
            const td = document.createElement("th");
            td.className = "tdHead"
            td.textContent = data;
            trHead.appendChild(td);
        });

        array.forEach(flat => {
            const tr = document.createElement("tr");
            const thName = document.createElement("th");
            const tdCity = document.createElement("td");
            const tdStreetName = document.createElement("td");
            const tdStreetNumber = document.createElement("td");
            const tdAreaSize = document.createElement("td");
            const tdHasAC = document.createElement("td");
            const tdYearBuilt = document.createElement("td");
            const tdDateAvailable = document.createElement("td");
            const tdRentPrice = document.createElement("td");
            const tdImg = document.createElement("td");
            const tdFavorite = document.createElement("td");
            const tableImg = document.createElement("img");
            const favorite = document.createElement("img");

            tr.className = "trBody";
            thName.className = "thBody";
            tdCity.className = "tdBody";
            tdStreetName.className = "tdBody";
            tdStreetNumber.className = "tdBody";
            tdAreaSize.className = "tdBody";
            tdHasAC.className = "tdBody";
            tdYearBuilt.className = "tdBody";
            tdDateAvailable.className = "tdBody";
            tdRentPrice.className = "tdBody";
            tdImg.className = "tdBody";
            tdFavorite.className = "tdBody";
            tableImg.className = "flatTableImg";
            favorite.className = "tableFavorite";

            thName.textContent = flat.name;
            tdCity.textContent = flat.city;
            tdStreetName.textContent = flat.streetName;
            tdStreetNumber.textContent = flat.streetNumber;
            tdAreaSize.textContent = flat.areaSize;
            tdYearBuilt.textContent = flat.yearBuilt;
            tdDateAvailable.textContent = flat.dateAvailable;
            tdRentPrice.textContent = flat.rentPrice;
            tableImg.src = flat.imageSrc;
            tableImg.alt = allFlatsStrings.imgAlt;
            favorite.alt = allFlatsStrings.favorite.alt;

            if (flat.hasAC) {
                tdHasAC.textContent = "Si";
            } else {
                tdHasAC.textContent = "No";
            }

            if (favoriteFlatsSet.has(flat)) {
                favorite.src = allFlatsStrings.favorite.favoriteIcon;
            } else {
                favorite.src = allFlatsStrings.favorite.unfavoriteIcon;
            }

            favorite.addEventListener("click", () => {
                favoriteEvent(favorite, flat);
                if (favoriteButton.classList.contains("active")) {
                    updateFlats(grid, favoriteFlatsSet, favoriteButton, flatsContainer);
                }
            })

            tdImg.appendChild(tableImg);
            tdFavorite.appendChild(favorite);
            tr.appendChild(thName);
            tr.appendChild(tdCity);
            tr.appendChild(tdStreetName);
            tr.appendChild(tdStreetNumber);
            tr.appendChild(tdAreaSize);
            tr.appendChild(tdHasAC);
            tr.appendChild(tdYearBuilt);
            tr.appendChild(tdDateAvailable);
            tr.appendChild(tdRentPrice);
            tr.appendChild(tdImg);
            tr.appendChild(tdFavorite);
            flatsTableBody.appendChild(tr);
        });

        flatsTableHead.appendChild(trHead);
        table.appendChild(flatsTableHead);
        table.appendChild(flatsTableBody);
        flatsTable.appendChild(table);
    } else {
        flatsTable.classList.remove("flatsTable");
        const emptyLabel = document.createElement("h1");
        emptyLabel.className = "formTitle";
        emptyLabel.textContent = allFlatsStrings.emptyLabel;
        flatsTable.appendChild(emptyLabel);
    }

    return flatsTable;
}