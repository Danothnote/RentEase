export const sortFlatCity = (array) => {
  const sortedArray = [...array];
  sortedArray.sort(function (a, b) {
    const cityA = a.getCity().toUpperCase();
    const cityB = b.getCity().toUpperCase();
    if (cityA < cityB) {
      return -1;
    }
    if (cityA > cityB) {
      return 1;
    }
    return 0;
  });
  return sortedArray;
}