import { allFlatsStrings } from "../../model/allFlats/allFlatsStrings";
import { mapFilters } from "../../model/allFlats/mapFilters";

export const filterEvent = (filter, selectedOption, flatsArray, filteredArray) => {
    const filterArray = flatsArray;
    filteredArray = filterArray;
    const filters = Array.from(allFlatsStrings.filter.filters);

    switch (filter.label) {
        case allFlatsStrings.filter.filters[0].label:
            if (selectedOption === "Todas") {
                allFlatsStrings.filtersOn.cityOn = false;
                mapFilters.set("city", (array) => array);
            } else {
                allFlatsStrings.filtersOn.cityOn = true;
                mapFilters.set("city", (array) => array.filter(flat => flat.getCity() === selectedOption));
            }
        case allFlatsStrings.filter.filters[1].label:
            switch (selectedOption) {
                case filters[1].options[0]:
                    allFlatsStrings.filtersOn.priceOn = false;
                    mapFilters.set("price", (array) => array);
                    break;
                case filters[1].options[1]:
                    allFlatsStrings.filtersOn.priceOn = true;
                    mapFilters.set("price", (array) => array.filter(flat => flat.getRentPrice() < 100));
                    break;
                case filters[1].options[2]:
                    allFlatsStrings.filtersOn.priceOn = true;
                    mapFilters.set("price", (array) => array.filter(flat => flat.getRentPrice() >= 100 && flat.getRentPrice() <= 200));
                    break;
                case filters[1].options[3]:
                    allFlatsStrings.filtersOn.priceOn = true;
                    mapFilters.set("price", (array) => array.filter(flat => flat.getRentPrice() > 200));
                    break;
            }
        case allFlatsStrings.filter.filters[2].label:
            switch (selectedOption) {
                case filters[2].options[0]:
                    allFlatsStrings.filtersOn.areaOn = false;
                    mapFilters.set("area", (array) => array);
                    break;
                case filters[2].options[1]:
                    allFlatsStrings.filtersOn.areaOn = true;
                    mapFilters.set("area", (array) => array.filter(flat => flat.getAreaSize() < 100));
                    break;
                case filters[2].options[2]:
                    allFlatsStrings.filtersOn.areaOn = true;
                    mapFilters.set("area", (array) => array.filter(flat => flat.getAreaSize() >= 100 && flat.getAreaSize() <= 200));
                    break;
                case filters[2].options[3]:
                    allFlatsStrings.filtersOn.areaOn = true;
                    mapFilters.set("area", (array) => array.filter(flat => flat.getAreaSize() > 200));
                    break;
            }
    }
    mapFilters.forEach(func => {
        filteredArray = func(filteredArray);
    });
    allFlatsStrings.allFlatsFiltered = filteredArray;
    return filteredArray;
}