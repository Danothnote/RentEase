import { User } from "../../classes/userClass";

export const addUser = () => {
    return new User('daniel123', 'daniel@correo.com', 'Hola1234%', 'Daniel', 'Salazar', '1991-03-25', "src/assets/avatar.avif");
}
