import { profileStrings } from "../../model/profile/profileStrings";
import { userData } from "../../model/userData";

export const addUser = (user) => {
    userData.userClass.setUsername(user.username);
    userData.userClass.setEmail(user.email);
    userData.userClass.setFirstName(user.firstName);
    userData.userClass.setLastName(user.lastName);
    userData.userClass.setBirthday(user.birthday.split(' ')[0]);
    userData.userClass.setProfileImg(user.profileImg ? user.profileImg : profileStrings.userImg.src);
    userData.userClass.setId(user.id);
}
