import { allFlatsStrings } from "../../model/allFlats/allFlatsStrings";

export const searchFilter = (searchValue) => {
    const filteredFlats = Array.from(allFlatsStrings.allFlatsArray).filter(flat =>
        flat.name.toLowerCase().includes(searchValue) ||
        flat.city.toLowerCase().includes(searchValue) ||
        flat.streetName.toLowerCase().includes(searchValue) ||
        flat.yearBuilt.toString().includes(searchValue)
    );
    allFlatsStrings.allFlatsFiltered = filteredFlats;
    if (searchValue !== "") {
        allFlatsStrings.searchOn = true;
    } else {
        allFlatsStrings.searchOn = false;
    }
}