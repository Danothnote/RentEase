import { clearInputs } from "../clearInputs";
import { pb } from "../pocketbase/newPocketbase";

export const uploadFlat = async (imgUpload, area, yearBuilt, dateAvailable, flatName, city, street, streetNumber, airConditioning, rentPrice) => {
    const data = {
        "name": flatName,
        "city": city,
        "streetName": street,
        "streetNumber": streetNumber,
        "areaSize": area,
        "hasAC": airConditioning,
        "yearBuilt": yearBuilt,
        "dateAvailable": dateAvailable,
        "rentPrice": rentPrice,
        "imageSrc": imgUpload,
    };
    await pb.collection('flats').create(data);
    clearInputs();
}