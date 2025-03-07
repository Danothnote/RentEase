import { allFlatsStrings } from "../../model/allFlats/allFlatsStrings";

export const sortFlatCity = (array) => {
  const sortedArray = [...array];
  sortedArray.sort(function (a, b) {
    const cityA = a.city.toUpperCase();
    const cityB = b.city.toUpperCase();
    if (cityA < cityB) {
      return -1;
    }
    if (cityA > cityB) {
      return 1;
    }
    return 0;
  });
  allFlatsStrings.allFlatsArray = sortedArray;
}