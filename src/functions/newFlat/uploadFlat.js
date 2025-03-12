import { errorDialogStrings } from "../../model/errorDialogStrings";
import { errorStrings } from "../../model/errorStrings";
import { newFlatStrings } from "../../model/newFlat/newFlatStrings";
import { clearInputs } from "../clearInputs";
import { pb } from "../pocketbase/newPocketbase";

export const uploadFlat = async (imgUpload, area, yearBuilt, dateAvailable, flatName, city, street, streetNumber, airConditioning, rentPrice, loadingDialog, errorDialog) => {
    const data = {
        "name": flatName,
        "city": city,
        "streetName": street,
        "streetNumber": streetNumber,
        "areaSize": area,
        "hasAC": airConditioning === "Si" ? true : false,
        "yearBuilt": yearBuilt,
        "dateAvailable": dateAvailable,
        "rentPrice": rentPrice,
        "imageSrc": imgUpload,
    };
    try {
        loadingDialog.showModal()
        await pb.collection('flats').create(data);
        newFlatStrings.right.forEach(element => {
            element.valid = false;
        })
        newFlatStrings.left.forEach(element => {
            element.valid = false;
        })
        clearInputs();
        loadingDialog.close();
    } catch (error) {
        loadingDialog.close();
        console.log(error.response.data);
        switch (error.response.data[key].code) {
            case errorStrings.alredyExists.error:
                document.getElementById(errorDialogStrings.messageID).textContent = errorStrings.alredyExists.label;
                errorDialog.showModal();
                break;
            case errorStrings.fillInputsError.error:
                document.getElementById(errorDialogStrings.messageID).textContent = errorStrings.alredyExists.label;
                errorDialog.showModal();
                break;
            default:
                document.getElementById(errorDialogStrings.messageID).textContent = error.response.data[key].code;
                errorDialog.showModal();
                break;
        }
    }
}