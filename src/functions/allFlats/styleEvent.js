import { allFlatsStrings } from "../../model/allFlats/allFlatsStrings";

export const styleEvent = (gridIcon, tableIcon) => {
    if (gridIcon.classList.contains("active")) {
        tableIcon.src = allFlatsStrings.toggleButton.tableIconOn;
        gridIcon.src = allFlatsStrings.toggleButton.gridIconOff;
        gridIcon.classList.remove("active");
        tableIcon.classList.add("active");
    } else {
        tableIcon.src = allFlatsStrings.toggleButton.tableIconOff;
        gridIcon.src = allFlatsStrings.toggleButton.gridIconOn;
        tableIcon.classList.remove("active");
        gridIcon.classList.add("active");
    }
}