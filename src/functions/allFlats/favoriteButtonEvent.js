import { allFlatsArray } from "../../model/allFlats/allFlatsArray";
import { allFlatsStrings } from "../../model/allFlats/allFlatsStrings";
import { favoriteFlatsSet } from "../../model/allFlats/favoriteFlatsSet";

export const favoriteButtonEvent = (favoriteButton) => {
    if (favoriteButton.classList.contains("active")) {
        favoriteButton.src = allFlatsStrings.favoriteButton.favoriteIconOff;
        favoriteButton.classList.remove("active");
        allFlatsStrings.allFlatsArray = allFlatsArray;
    } else {
        favoriteButton.src = allFlatsStrings.favoriteButton.favoriteIconOn;
        favoriteButton.classList.add("active");
        allFlatsStrings.allFlatsArray = Array.from(favoriteFlatsSet);
    }
}