import { navBarModel } from "../model/navbar/navbarModel";
import { pageModel } from "../model/pageModel";
import { profileStrings } from "../model/profile/profileStrings";
import { userData } from "../model/userData";
import { addUser } from "./navbar/addUser";
import { pageRouter } from "./pageRouter";
import { pb } from "./pocketbase/newPocketbase";

export const isLoggedIn = async () => {
    if (localStorage.getItem("auth")) {
        if (userData.userClass.username === undefined) {
            const user = JSON.parse(localStorage.getItem("auth"));
            const record = await pb.collection("users").getOne(user.id);
            const profileImgUrl = pb.files.getURL(record, record.profileImg);
            const avatar = document.getElementById(navBarModel.avatar.id);

            profileImgUrl ? avatar.src = profileImgUrl : avatar.src = profileStrings.userImg.src;
            document.getElementById(navBarModel.greetings.id).textContent = `${navBarModel.greetings.label} ${user.firstName} ${user.lastName}`
            user.profileImg = profileImgUrl;
            addUser(user);
            localStorage.setItem("auth", JSON.stringify(user));
        }
    } else {
        pageRouter(pageModel.list[0]);
    }
}