export const sortFlatArea = (array) => {
    const sortedArray = [...array];
    sortedArray.sort(function (a, b) {
        const areaA = a.getAreaSize();
        const areaB = b.getAreaSize();
        if (areaA < areaB) {
            return -1;
        }
        if (areaA > areaB) {
            return 1;
        }
        return 0;
    });
    return sortedArray;
}