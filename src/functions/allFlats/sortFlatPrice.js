import { allFlatsStrings } from "../../model/allFlats/allFlatsStrings";

export const sortFlatPrice = (array) => {
    const sortedArray = [...array];
    sortedArray.sort(function (a, b) {
        const priceA = a.rentPrice;
        const priceB = b.rentPrice;
        if (priceA < priceB) {
            return -1;
        }
        if (priceA > priceB) {
            return 1;
        }
        return 0;
    });
    allFlatsStrings.allFlatsArray = sortedArray;
}