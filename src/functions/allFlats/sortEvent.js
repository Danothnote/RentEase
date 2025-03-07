import { allFlatsArray } from "../../model/allFlats/allFlatsArray";
import { allFlatsStrings } from "../../model/allFlats/allFlatsStrings";
import { sortFlatCity } from "./sortFlatCity";
import { sortFlatPrice } from "./sortFlatPrice";
import { sortFlatArea } from "./sortFlatsArea";

export const sortEvent = (select) => {
    switch (select) {
        case allFlatsStrings.sort.options[1]:
            sortFlatCity(allFlatsStrings.allFlatsArray);
            break;
        case allFlatsStrings.sort.options[2]:
            sortFlatPrice(allFlatsStrings.allFlatsArray);
            break;
        case allFlatsStrings.sort.options[3]:
            sortFlatArea(allFlatsStrings.allFlatsArray);
        default:
            allFlatsStrings.allFlatsArray = allFlatsArray;
            break;
    }
}