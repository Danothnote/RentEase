export class Flat {
    #id;
    #name;
    #city;
    #streetName;
    #streetNumber;
    #areaSize;
    #hasAC;
    #yearBuilt;
    #dateAvailable;
    #rentPrice;
    #imageSrc;

    constructor(id, name, city, streetName, streetNumber, areaSize, hasAC, yearBuilt, rentPrice, dateAvailable, imageSrc) {
        this.#id = id;
        this.#name = name;
        this.#city = city;
        this.#streetName = streetName;
        this.#streetNumber = streetNumber;
        this.#areaSize = areaSize;
        this.#hasAC = hasAC;
        this.#yearBuilt = yearBuilt;
        this.#dateAvailable = dateAvailable;
        this.#rentPrice = rentPrice;
        this.#imageSrc = imageSrc;
    }

    getId() { return this.#id };
    setId(id) { this.#id = id; };
    getName() { return this.#name };
    setName(name) { this.#name = name };
    getCity() { return this.#city };
    setCity(city) { this.#city = city };
    getStreetName() { return this.#streetName };
    setStreetName(streetName) { this.#streetName = streetName };
    getStreetNumber() { return this.#streetNumber };
    setStreetNumber(streetNumber) { this.#streetNumber = streetNumber };
    getAreaSize() { return this.#areaSize };
    setAreaSize(areaSize) { this.#areaSize = areaSize };
    getHasAC() { return this.#hasAC };
    setHasAC(hasAC) { this.#hasAC = hasAC };
    getYearBuilt() { return this.#yearBuilt };
    setYearBuilt(yearBuilt) { this.#yearBuilt = yearBuilt };
    getDateAvailable() { return this.#dateAvailable };
    setDateAvailable(dateAvailable) { this.#dateAvailable = dateAvailable };
    getRentPrice() { return this.#rentPrice };
    setRentPrice(rentPrice) { this.#rentPrice = rentPrice };
    getImageSrc() { return this.#imageSrc };
    setImageSrc(imageSrc) { this.#imageSrc = imageSrc };
}