import { userData } from "../../model/userData";
import { addUser } from "../navbar/addUser";
import { pb } from "../pocketbase/newPocketbase";

export const updateUser = async (key, input) => {
    const userID = JSON.parse(localStorage.getItem("auth")).id;
    const data = new Object();
    key === "profileImg" ? data[key] = input.files[0] : data[key] = input.value;
    await pb.collection('users').update(userID, data);
    const auth = await pb.collection('users').getOne(userID);
    const profileImageUrl = await pb.files.getURL(auth, auth.profileImg);
    auth.profileImg = profileImageUrl;
    localStorage.setItem("auth", JSON.stringify(auth));
    addUser(auth);
    if (key === "profileImg") {
        document.getElementById("avatar").src = userData.userClass.profileImg;
        document.getElementById("profileImg").src = userData.userClass.profileImg;
    } else {
        document.getElementById(key).textContent = input.value;
    }
}