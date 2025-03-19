export const sortFlatPrice = (array) => {
    const sortedArray = [...array];
    sortedArray.sort(function (a, b) {
        const priceA = a.getRentPrice();
        const priceB = b.getRentPrice();
        if (priceA < priceB) {
            return -1;
        }
        if (priceA > priceB) {
            return 1;
        }
        return 0;
    });
    return sortedArray;
}