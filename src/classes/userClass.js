export class User {
    username;
    email;
    password;
    firstName;
    lastName;
    birdDate;
    profileImage;

    constructor(username, email, password, firstName, lastName, birdDate, profileImage) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birdDate = birdDate;
        this.profileImage = profileImage;
    }
}