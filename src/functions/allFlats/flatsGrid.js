import { allFlatsStrings } from "../../model/allFlats/allFlatsStrings";
import { favoriteFlatsSet } from "../../model/allFlats/favoriteFlatsSet";
import { favoriteEvent } from "./favoriteEvent";
import { updateFlats } from "./updateFlats";

export const flatsGrid = (array, favoriteButton, grid, flatsContainer) => {
    const flatsGrid = document.createElement("div");
    flatsGrid.className = "flatsGrid";

    if (typeof array !== 'undefined' && array.length !== 0 && array.size !== 0) {
        array.forEach(flat => {
            const card = document.createElement("div");
            const cardImgDiv = document.createElement("div");
            const favorite = document.createElement("img");
            const cardImg = document.createElement("img");
            const flatName = document.createElement("h3");
            const cityDiv = document.createElement("div");
            const cityLabel = document.createElement("span");
            const city = document.createElement("span");
            const addressDiv = document.createElement("div");
            const addressLabel = document.createElement("span");
            const address = document.createElement("span");
            const areaDiv = document.createElement("div");
            const areaLabel = document.createElement("span");
            const area = document.createElement("span");
            const airConditioningDiv = document.createElement("div");
            const airConditioningLabel = document.createElement("span");
            const airConditioning = document.createElement("span");
            const yearBuiltDiv = document.createElement("div");
            const yearBuiltLabel = document.createElement("span");
            const yearBuilt = document.createElement("span");
            const dateAvailableDiv = document.createElement("div");
            const dateAvailableLabel = document.createElement("span");
            const dateAvailable = document.createElement("span");
            const priceDiv = document.createElement("div");
            const priceLabel = document.createElement("span");
            const price = document.createElement("span");

            card.className = "flatCard";
            cardImgDiv.className = "cardImgDiv";
            favorite.className = "cardFavorite";
            cardImg.className = "flatCardImg";
            flatName.className = "formTitle";
            cityDiv.className = "cardItem";
            addressDiv.className = "cardItem";
            areaDiv.className = "cardItem";
            airConditioningDiv.className = "cardItem";
            yearBuiltDiv.className = "cardItem";
            dateAvailableDiv.className = "cardItem";
            priceDiv.className = "cardItem";
            cityLabel.className = "cardItemLabel"
            addressLabel.className = "cardItemLabel";
            areaLabel.className = "cardItemLabel";
            airConditioningLabel.className = "cardItemLabel";
            yearBuiltLabel.className = "cardItemLabel";
            dateAvailableLabel.className = "cardItemLabel";
            priceLabel.className = "cardItemLabel";
            city.className = "cardItemValue";
            address.className = "cardItemValue";
            area.className = "cardItemValue";
            airConditioning.className = "cardItemValue";
            yearBuilt.className = "cardItemValue";
            dateAvailable.className = "cardItemValue";
            price.className = "cardItemValue";

            flatName.textContent = flat.name;
            cityLabel.textContent = allFlatsStrings.labels.city;
            addressLabel.textContent = allFlatsStrings.labels.address;
            areaLabel.textContent = allFlatsStrings.labels.area;
            airConditioningLabel.textContent = allFlatsStrings.labels.airConditioning;
            yearBuiltLabel.textContent = allFlatsStrings.labels.yearBuilt;
            dateAvailableLabel.textContent = allFlatsStrings.labels.dateAvailable;
            priceLabel.textContent = allFlatsStrings.labels.rentPrice;

            cardImg.src = flat.imageSrc;
            cardImg.alt = allFlatsStrings.imgAlt;
            city.textContent = flat.city;
            address.textContent = `${flat.streetName} ${flat.streetNumber}`;
            area.textContent = `${flat.areaSize} m²`;
            airConditioning.textContent = flat.hasAC ? allFlatsStrings.options.yes : allFlatsStrings.options.no;
            yearBuilt.textContent = flat.yearBuilt;
            dateAvailable.textContent = flat.dateAvailable;
            price.textContent = `$${flat.rentPrice}`;
            favorite.alt = allFlatsStrings.favorite.alt;

            if (favoriteFlatsSet.has(flat)) {
                favorite.src = allFlatsStrings.favorite.favoriteIcon;
            } else {
                favorite.src = allFlatsStrings.favorite.unfavoriteIcon;
            }

            favorite.addEventListener("click", () => {
                favoriteEvent(favorite, flat);
                if (favoriteButton.classList.contains("active")) {
                    updateFlats(grid, favoriteFlatsSet, favoriteButton, flatsContainer);
                }
            })

            cityDiv.appendChild(cityLabel);
            cityDiv.appendChild(city);
            addressDiv.appendChild(addressLabel);
            addressDiv.appendChild(address);
            areaDiv.appendChild(areaLabel);
            areaDiv.appendChild(area);
            airConditioningDiv.appendChild(airConditioningLabel);
            airConditioningDiv.appendChild(airConditioning);
            yearBuiltDiv.appendChild(yearBuiltLabel);
            yearBuiltDiv.appendChild(yearBuilt);
            dateAvailableDiv.appendChild(dateAvailableLabel);
            dateAvailableDiv.appendChild(dateAvailable);
            priceDiv.appendChild(priceLabel);
            priceDiv.appendChild(price);

            cardImgDiv.appendChild(cardImg);
            cardImgDiv.appendChild(favorite);
            card.appendChild(cardImgDiv);
            card.appendChild(flatName);
            card.appendChild(cityDiv);
            card.appendChild(addressDiv);
            card.appendChild(areaDiv);
            card.appendChild(airConditioningDiv);
            card.appendChild(yearBuiltDiv);
            card.appendChild(dateAvailableDiv);
            card.appendChild(priceDiv);
            flatsGrid.appendChild(card);
        });
    } else {
        flatsGrid.classList.remove("flatsGrid");
        const emptyLabel = document.createElement("h1");
        emptyLabel.className = "formTitle";
        emptyLabel.textContent = allFlatsStrings.emptyLabel;
        flatsGrid.appendChild(emptyLabel);
    }
    return flatsGrid;
}