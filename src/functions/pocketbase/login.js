import { errorDialogStrings } from "../../model/errorDialogStrings";
import { errorStrings } from "../../model/errorStrings";
import { navBarModel } from "../../model/navbar/navbarModel";
import { pageModel } from "../../model/pageModel";
import { profileStrings } from "../../model/profile/profileStrings";
import { clearInputs } from "../clearInputs";
import { addUser } from "../navbar/addUser";
import { changeLogged } from "../navbar/changeLogged";
import { pageRouter } from "../pageRouter";
import { pb } from "./newPocketbase";

export const login = async (email, password, loadingDialog, errorDialog) => {
    if (!email || !password) {
        document.getElementById(errorDialogStrings.messageID).textContent = errorStrings.emptyCredentials;
        errorDialog.showModal();
    } else {
        try {
            loadingDialog.showModal();
            const auth = await pb.collection("users").authWithPassword(email, password);
            const profileImageUrl = pb.files.getURL(auth.record, auth.record.profileImg);
            const avatar = document.getElementById(navBarModel.avatar.id);

            auth.record.profileImg = profileImageUrl;
            localStorage.setItem("auth", JSON.stringify(auth.record));
            profileImageUrl ? avatar.src = profileImageUrl : avatar.src = profileStrings.userImg.src;
            document.getElementById(navBarModel.greetings.id).textContent = `${navBarModel.greetings.label} ${auth.record.firstName} ${auth.record.lastName}`

            addUser(auth.record);
            clearInputs();
            changeLogged(true);
            pageRouter(pageModel.list[0]);
            loadingDialog.close();
        } catch (error) {
            loadingDialog.close();
            console.log(error.response.message);
            switch (error.message) {
                case errorStrings.badCredentials.error:
                    document.getElementById(errorDialogStrings.messageID).textContent = errorStrings.badCredentials.label;
                    errorDialog.showModal();
                    break;

                default:
                    document.getElementById(errorDialogStrings.messageID).textContent = "Error al iniciar sesión: " + error.message;
                    errorDialog.showModal();
                    break;
            }
        }
    }
}