import { allFlatsStrings } from "../../model/allFlats/allFlatsStrings";

export const sortFlatArea = (array) => {
    const sortedArray = [...array];
    sortedArray.sort(function (a, b) {
        const areaA = a.areaSize;
        const areaB = b.areaSize;
        if (areaA < areaB) {
            return -1;
        }
        if (areaA > areaB) {
            return 1;
        }
        return 0;
    });
    allFlatsStrings.allFlatsArray = sortedArray;
}