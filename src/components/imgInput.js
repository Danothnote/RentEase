import { imgInputStrings } from "../model/imgInputStrings";
import { validateTypes } from "../model/validateTypes";

export const createImgInput = () => {
    const imgInputDiv = document.createElement("div");
    const dropImg = document.createElement("div");
    const dropLabelDiv = document.createElement("div");
    const uploadDiv = document.createElement("div");
    const input = document.createElement("input");
    const dropLabel = document.createElement("p");
    const dropLabelIcon = document.createElement("img");
    const inputLabel = document.createElement("p");

    imgInputDiv.className = "imgContainer";
    dropImg.className = "dropImg";
    dropLabelDiv.className = "dropLabelDiv";
    dropLabel.className = "dropLabel";
    dropLabelIcon.className = "dropLabelIcon";
    uploadDiv.className = "formInputDiv";
    inputLabel.className = "formLabel";
    input.className = "formInput";

    input.style.backgroundColor = "white";
    input.type = "file";
    input.accept = `${validateTypes.jpg}, ${validateTypes.png}, ${validateTypes.webp}, ${validateTypes.gif}, ${validateTypes.svg}`;

    dropLabel.textContent = imgInputStrings.dropImgLabel;
    dropLabelIcon.alt = imgInputStrings.dropImgIconAlt;
    dropLabelIcon.src = imgInputStrings.dropImgIconSrc;

    if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
        dropImg.style.display = "none";
        inputLabel.textContent = imgInputStrings.labelMobile;
        uploadDiv.style.marginTop = "0px";
    } else {
        inputLabel.textContent = imgInputStrings.inputLabel;
        uploadDiv.style.marginTop = "28px";
    }

    dropImg.addEventListener("dragover", (event) => {
        event.preventDefault();
        dropImg.style.backgroundColor = "lightgray";
    });

    dropLabelDiv.appendChild(dropLabelIcon);
    dropLabelDiv.appendChild(dropLabel);
    uploadDiv.appendChild(inputLabel);
    uploadDiv.appendChild(input);
    dropImg.appendChild(dropLabelDiv);
    imgInputDiv.appendChild(dropImg);
    imgInputDiv.appendChild(uploadDiv);

    return imgInputDiv;
}