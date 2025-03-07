import { flatsGrid } from "./flatsGrid";
import { flatsTable } from "./flatsTable";

export const updateFlats = (grid, array, favoriteButton, flatsContainer) => {
    if (grid) {
        flatsContainer.replaceChildren(flatsGrid(array, favoriteButton, grid, flatsContainer));
    } else {
        flatsContainer.replaceChildren(flatsTable(array, favoriteButton, grid, flatsContainer));
    }
}