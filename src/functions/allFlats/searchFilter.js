import { allFlatsStrings } from "../../model/allFlats/allFlatsStrings";

export const searchFilter = (searchValue) => {
    const filteredFlats = allFlatsStrings.allFlatsArray.filter(flat =>
        flat.name.toLowerCase().includes(searchValue) ||
        flat.city.toLowerCase().includes(searchValue) ||
        flat.streetName.toLowerCase().includes(searchValue) ||
        flat.yearBuilt.toString().includes(searchValue)
    );
    return filteredFlats;
}