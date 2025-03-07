import { allFlatsArray } from "../../model/allFlats/allFlatsArray";
import { allFlatsCitySet } from "../../model/allFlats/allFlatsFilterCitySet";

export const addCityFilter = () => {
    allFlatsArray.forEach(flat => {
        allFlatsCitySet.add(flat.city);
    });
}