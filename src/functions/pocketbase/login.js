import { pageModel } from "../../model/pageModel";
import { profileStrings } from "../../model/profile/profileStrings";
import { clearInputs } from "../clearInputs";
import { changeLogged } from "../navbar/changeLogged";
import { pageRouter } from "../pageRouter";
import { pb } from "./newPocketbase";

export const login = async (email, password) => {
    if (!email || !password) {
        alert("Por favor introduce el email y contraseña");
    } else {
        const auth = await pb.collection("users").authWithPassword(email, password);
        const profileImageUrl = await pb.files.getURL(auth.record, auth.record.profileImg);
        auth.record.profileImg = profileImageUrl;
        localStorage.setItem("auth", JSON.stringify(auth.record));
        profileImageUrl ? document.getElementById("avatar").src = profileImageUrl : document.getElementById("avatar").src = profileStrings.userImg.src;
        clearInputs();
        changeLogged();
        pageRouter(pageModel.list[0]);
    }
}