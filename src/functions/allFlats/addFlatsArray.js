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

    const flat1 = new Flat('Flat 1', 'Barcelona', 'Diagonal', 123, 100, true, 1990, 99, '2021-01-01', "src/assets/departamento.webp");
    const flat2 = new Flat('Flat 2', 'Madrid', 'Calle', 456, 150, false, 2005, 150, '2022-02-02', "src/assets/departamento.webp");
    const flat3 = new Flat('Flat 3', 'Valencia', 'Avenida', 789, 200, true, 2010, 200, '2023-03-03', "src/assets/departamento.webp");
    const flat4 = new Flat('Flat 4', 'Sevilla', 'Plaza', 1011, 250, false, 2015, 250, '2024-04-04', "src/assets/departamento.webp");

    // allFlatsArray.push(record);
}