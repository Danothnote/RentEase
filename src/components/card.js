import { allFlatsStrings } from "../model/allFlats/allFlatsStrings";
import { favoriteFlatsSet } from "../model/allFlats/favoriteFlatsSet";
import { createItemDiv } from "./itemDiv";
import { createTitle } from "./title";

export const createCard = (flat) => {
    const card = document.createElement("div");
    const cardImgDiv = document.createElement("div");
    const favorite = document.createElement("img");
    const cardImg = document.createElement("img");
    const flatName = createTitle(flat.getName(), "h3");
    const cityDiv = createItemDiv(allFlatsStrings.labels.city, flat.getCity(), "", "", "", true);
    const addressDiv = createItemDiv(allFlatsStrings.labels.address, `${flat.getStreetName()} ${flat.getStreetNumber()}`, "", "", "", true);
    const areaDiv = createItemDiv(allFlatsStrings.labels.area, `${flat.getAreaSize()} m²`, "", "", "", true);
    const airConditioningDiv = createItemDiv(allFlatsStrings.labels.airConditioning, flat.getHasAC() ? allFlatsStrings.options.yes : allFlatsStrings.options.no, "", "", "", true);
    const yearBuiltDiv = createItemDiv(allFlatsStrings.labels.yearBuilt, flat.getYearBuilt(), "", "", "", true);
    const dateAvailableDiv = createItemDiv(allFlatsStrings.labels.dateAvailable, flat.getDateAvailable(), "", "", "", true);
    const priceDiv = createItemDiv(allFlatsStrings.labels.rentPrice, `$${flat.getRentPrice()}`, "", "", "", true);

    card.className = "flatCard";
    cardImgDiv.className = "cardImgDiv";
    favorite.className = "cardFavorite";
    cardImg.className = "flatCardImg";

    cardImg.src = flat.getImageSrc();
    cardImg.alt = allFlatsStrings.imgAlt;
    favorite.src = favoriteFlatsSet.has(flat) ? allFlatsStrings.favorite.favoriteIcon : allFlatsStrings.favorite.unfavoriteIcon;
    favorite.alt = allFlatsStrings.favorite.alt;

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

    return card;
}