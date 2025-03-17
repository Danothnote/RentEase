import { errorDialogStrings } from "../../model/errorDialogStrings";
import { errorStrings } from "../../model/errorStrings";
import { pageModel } from "../../model/pageModel";
import { signupStrings } from "../../model/signup/signupStrings";
import { clearInputs } from "../clearInputs";
import { pageRouter } from "../pageRouter";
import { pb } from "./newPocketbase";

export const signup = async (username, firstName, lastName, birthday, email, password, confirmPassword, loadingDialog, errorDialog) => {
    try {
        loadingDialog.showModal();
        const data = {
            "username": username,
            "email": email,
            "firstName": firstName,
            "lastName": lastName,
            "birthday": birthday,
            "password": password,
            "passwordConfirm": confirmPassword,
        };

        await pb.collection('users').create(data);
        signupStrings.username.valid = false;
        signupStrings.left.forEach(element => {
            element.valid = false;
        });
        signupStrings.right.forEach(element => {
            element.valid = false;
        });
        clearInputs();
        pageRouter(pageModel.list[0]);
        loadingDialog.close();
    } catch (error) {
        loadingDialog.close();
        console.log(error.response.data);
        if (error.response.data.username) {
            document.getElementById(errorDialogStrings.messageID).textContent = errorStrings.userAlredyExists.label;
            errorDialog.showModal();
        } else if (error.response.data.email) {
            document.getElementById(errorDialogStrings.messageID).textContent = errorStrings.emailAlredyExists.label;
            errorDialog.showModal();
        }
    }
}