import { pageModel } from "../../model/pageModel";
import { clearInputs } from "../clearInputs";
import { pageRouter } from "../pageRouter";
import { pb } from "./newPocketbase";

export const signup = async (username, firstName, lastName, birthday, email, password, confirmPassword) => {
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
    clearInputs();
    pageRouter(pageModel.list[0]);
}