import { pageModel } from "../../model/pageModel";
import { clearInputs } from "../clearInputs";
import { changeLogged } from "../navbar/changeLogged";
import { pageRouter } from "../pageRouter";
import { pb } from "./newPocketbase";

export const logout = () => {
    pb.authStore.clear();
    localStorage.removeItem("auth");
    changeLogged();
    clearInputs();
    pageRouter(pageModel.list[0]);
}