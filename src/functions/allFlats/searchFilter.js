import { allFlatsStrings } from "../../model/allFlats/allFlatsStrings";

export const searchFilter = (searchValue, array) => {
    const filteredFlats = array.filter(flat =>
        flat.getName().toLowerCase().includes(searchValue) ||
        flat.getCity().toLowerCase().includes(searchValue) ||
        flat.getStreetName().toLowerCase().includes(searchValue) ||
        flat.getYearBuilt().toString().includes(searchValue)
    );
    allFlatsStrings.allFlatsFiltered = filteredFlats;
    if (searchValue !== "") {
        allFlatsStrings.searchOn = true;
    } else {
        allFlatsStrings.searchOn = false;
    }
    return filteredFlats;
}