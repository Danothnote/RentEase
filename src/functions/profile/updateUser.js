import { navBarModel } from "../../model/navbar/navbarModel";
import { profileStrings } from "../../model/profile/profileStrings";
import { userData } from "../../model/userData";
import { addUser } from "../navbar/addUser";
import { pb } from "../pocketbase/newPocketbase";

export const updateUser = async (key, input) => {
    const userID = JSON.parse(localStorage.getItem("auth")).id;
    const data = new Object();
    key === profileStrings.userImg.id ? data[key] = input.files[0] : data[key] = input.value;
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
        document.getElementById(key).textContent = input.value;
    }
}