import { allFlatsStrings } from "../../model/allFlats/allFlatsStrings";
import { favoriteFlatsSet } from "../../model/allFlats/favoriteFlatsSet";

export const favoriteEvent = (favorite, flat) => {
    if (favoriteFlatsSet.has(flat)) {
        favoriteFlatsSet.delete(flat);
        favorite.src = allFlatsStrings.favorite.unfavoriteIcon;
    } else {
        favoriteFlatsSet.add(flat);
        favorite.src = allFlatsStrings.favorite.favoriteIcon;
    }
}