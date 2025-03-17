export const createItemDiv = (label, value, id, editIcon, editIconAlt, cardItem) => {
    console.log(cardItem);
    const itemDiv = document.createElement("div");
    itemDiv.className = cardItem ? "cardItem" : "labelContainer";

    const itemLabel = document.createElement("span");
    itemLabel.className = "cardItemLabel";
    itemLabel.textContent = label;

    const itemValue = document.createElement("span");
    itemValue.className = "cardItemValue";
    itemValue.textContent = value;
    itemValue.id = id;

    itemDiv.appendChild(itemLabel);
    itemDiv.appendChild(itemValue);

    if (editIcon) {
        const editIconImg = document.createElement("img");
        editIconImg.className = "profileEditIcon";
        editIconImg.src = editIcon;
        editIconImg.alt = editIconAlt;
        editIconImg.style.cursor = "pointer";
        itemDiv.appendChild(editIconImg);
        if (id === "email") {
            editIconImg.style.display = "none";
        }
    }

    return itemDiv;
}