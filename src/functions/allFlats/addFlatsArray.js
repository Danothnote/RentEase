import { Flat } from "../../classes/flatClass";
import { allFlatsArray } from "../../model/allFlats/allFlatsArray";
import { createAllFlatsScreen } from "../../screens/allFlatsScreen";
import { pb } from "../pocketbase/newPocketbase";
import { addCityFilter } from "./addCityFilter";

export const addFlatsArray = async (contentScreen) => {
    allFlatsArray.clear();
    const record = await pb.collection('flats').getFullList('RECORD_ID');
    record.forEach(flat => {
        const imageUrl = pb.files.getURL(record[record.indexOf(flat)], flat.imageSrc);
        const newflat = new Flat(flat.name, flat.city, flat.streetName, flat.streetNumber, flat.areaSize, flat.hasAC, flat.yearBuilt, flat.rentPrice, flat.dateAvailable.split(" ")[0], imageUrl);
        allFlatsArray.add(newflat);
    });
    addCityFilter();
    contentScreen.replaceChildren(createAllFlatsScreen());
}