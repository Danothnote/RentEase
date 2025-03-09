export class User {
    username;
    email;
    firstName;
    lastName;
    birthday;
    profileImg;
    id;

    constructor(username, email, firstName, lastName, birthday, profileImg, id) {
        this.username = username;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.profileImg = profileImg;
        this.id = id;
    }
}