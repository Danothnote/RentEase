export class Flat {
    name;
    city;
    streetName;
    streetNumber;
    areaSize;
    hasAC;
    yearBuilt;
    dateAvailable;
    rentPrice;
    imageSrc;

    constructor(name, city, streetName, streetNumber, areaSize, hasAC, yearBuilt, rentPrice, dateAvailable, imageSrc) {
        this.name = name;
        this.city = city;
        this.streetName = streetName;
        this.streetNumber = streetNumber;
        this.areaSize = areaSize;
        this.hasAC = hasAC;
        this.yearBuilt = yearBuilt;
        this.dateAvailable = dateAvailable;
        this.rentPrice = rentPrice;
        this.imageSrc = imageSrc;
    }
}