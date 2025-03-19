export class User {
    #username;
    #email;
    #firstName;
    #lastName;
    #birthday;
    #profileImg;
    #id;

    constructor(username, email, firstName, lastName, birthday, profileImg, id) {
        this.#username = username;
        this.#email = email;
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#birthday = birthday;
        this.#profileImg = profileImg;
        this.#id = id;
    }

    getUsername() { return this.#username };
    setUsername(username) { this.#username = username; };
    getEmail() { return this.#email };
    setEmail(email) { this.#email = email; };
    getFirstName() { return this.#firstName };
    setFirstName(firstName) { this.#firstName = firstName; };
    getLastName() { return this.#lastName };
    setLastName(lastName) { this.#lastName = lastName; };
    getBirthday() { return this.#birthday };
    setBirthday(birthday) { this.#birthday = birthday; };
    getProfileImg() { return this.#profileImg };
    setProfileImg(profileImg) { this.#profileImg = profileImg; };
    getId() { return this.#id };
    setId(id) { this.#id = id; };
    getFullName() { return `${this.#firstName} ${this.#lastName}`; }
}