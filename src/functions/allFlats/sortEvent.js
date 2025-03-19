import { allFlatsStrings } from "../../model/allFlats/allFlatsStrings";
import { sortFlatCity } from "./sortFlatCity";
import { sortFlatPrice } from "./sortFlatPrice";
import { sortFlatArea } from "./sortFlatsArea";

export const sortEvent = (select, array) => {
    switch (select) {
        case allFlatsStrings.sort.options[0]:
            return array;
        case allFlatsStrings.sort.options[1]:
            return sortFlatCity(array);
        case allFlatsStrings.sort.options[2]:
            return sortFlatPrice(array);
        case allFlatsStrings.sort.options[3]:
            return sortFlatArea(array);
    }
}