import { errorDialogStrings } from "../../model/errorDialogStrings";
import { errorStrings } from "../../model/errorStrings";
import { navBarModel } from "../../model/navbar/navbarModel";
import { profileStrings } from "../../model/profile/profileStrings";
import { userData } from "../../model/userData";
import { addUser } from "../navbar/addUser";
import { pb } from "../pocketbase/newPocketbase";

export const updateUser = async (key, input, dialog, loadingDialog, errorDialog) => {
    try {
        loadingDialog.showModal();
        const userID = JSON.parse(localStorage.getItem("auth")).id;
        const data = new Object();
        data[key] = input;
        await pb.collection('users').update(userID, data);

        const auth = await pb.collection('users').getOne(userID);
        const profileImageUrl = pb.files.getURL(auth, auth.profileImg);
        auth.profileImg = profileImageUrl;
        localStorage.setItem("auth", JSON.stringify(auth));
        addUser(auth);

        if (key === profileStrings.userImg.id) {
            document.getElementById(navBarModel.avatar.id).src = userData.userClass.profileImg;
            document.getElementById(profileStrings.userImg.id).src = userData.userClass.profileImg;
        } else {
            document.getElementById(key).textContent = userData.userClass[key];
        }
        loadingDialog.close();
        dialog.close();
    } catch (error) {
        console.log(error.response.data);
        loadingDialog.close();
        switch (error.response.data[key].code) {
            case errorStrings.alredyExists.error:
                document.getElementById(errorDialogStrings.messageID).textContent = errorStrings.alredyExists.label;
                errorDialog.showModal();
                break;
            case errorStrings.fillInputsError.error:
                document.getElementById(errorDialogStrings.messageID).textContent = errorStrings.fillInputsError.label;
                errorDialog.showModal();
                break;
            default:
                break;
        }
    }
}