import { createCard } from "../../components/card";
import { createTitle } from "../../components/title";
import { allFlatsStrings } from "../../model/allFlats/allFlatsStrings";
import { favoriteFlatsSet } from "../../model/allFlats/favoriteFlatsSet";
import { favoriteEvent } from "./favoriteEvent";
import { updateFlats } from "./updateFlats";

export const flatsGrid = (array, favoriteButton, grid, flatsContainer) => {
    const flatsGrid = document.createElement("div");
    flatsGrid.className = "flatsGrid";

    if (typeof array !== 'undefined' && array.length !== 0 && array.size !== 0) {
        array.forEach(flat => {
            const card = createCard(flat);
            const favorite = card.childNodes[0].childNodes[1];

            favorite.addEventListener("click", () => {
                favoriteEvent(favorite, flat);
                if (favoriteButton.classList.contains("active")) {
                    updateFlats(grid, favoriteFlatsSet, favoriteButton, flatsContainer);
                }
            })

            flatsGrid.appendChild(card);
        });
    } else {
        flatsGrid.classList.remove("flatsGrid");
        const emptyLabel = createTitle(allFlatsStrings.emptyLabel, "h1");
        flatsGrid.appendChild(emptyLabel);
    }
    return flatsGrid;
}