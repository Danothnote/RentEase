import { profileStrings } from "../../model/profile/profileStrings";
import { userData } from "../../model/userData";

export const addUser = (user) => {
    userData.userClass.username = user.username;
    userData.userClass.email = user.email;
    userData.userClass.firstName = user.firstName;
    userData.userClass.lastName = user.lastName;
    userData.userClass.birthday = user.birthday;
    user.profileImg ? userData.userClass.profileImg = user.profileImg : userData.userClass.profileImg = profileStrings.userImg.src;
    userData.userClass.id = user.id;
}
