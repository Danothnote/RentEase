export class User {
    userName;
    email;
    password;
    firstName;
    lastName;
    birdDate;

    constructor(nombre, email, password, firstName, lastName, birdDate) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birdDate = birdDate;
    }
}