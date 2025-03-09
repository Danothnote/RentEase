import { dialogCreator } from "../components/dialogCreator";
import { clearInputs } from "../functions/clearInputs";
import { pageRouter } from "../functions/pageRouter";
import { logout } from "../functions/pocketbase/logout";
import { pageModel } from "../model/pageModel";
import { profileStrings } from "../model/profile/profileStrings";

export const createProfileScreen = () => {
    const profileScreen = document.createElement("div");
    const screenGrandient = document.createElement("div");
    const formContainer = document.createElement("div");
    const formInputContainer = document.createElement("div");
    const formLeftContainer = document.createElement("div");
    const formRightContainer = document.createElement("div");
    const profileImgDiv = document.createElement("div");
    const buttonsDiv = document.createElement("div");
    const profileImg = document.createElement("img");
    const profileChangeDiv = document.createElement("div");
    const profileChangeImg = document.createElement("img");
    const formTitle = document.createElement("h1");
    const formPrimaryButton = document.createElement("button");
    const formSecondaryButton = document.createElement("button");
    const user = JSON.parse(localStorage.getItem("auth"));

    profileScreen.className = "profileScreen";
    screenGrandient.className = "containerGradient";
    formContainer.className = "formContainer";
    formTitle.className = "formTitle";
    formInputContainer.className = "profileFormInputContainer";
    formLeftContainer.className = "formLeftContainer";
    formRightContainer.className = "formRightContainer";
    buttonsDiv.className = "profileButtonsDiv";
    formPrimaryButton.className = "formPrimaryButton";
    formSecondaryButton.className = "formSecondaryButton";
    profileImgDiv.className = "profileImgDiv";
    profileImg.className = "profileImg";
    profileChangeDiv.className = "profileChangeDiv";
    profileChangeImg.className = "profileEditIcon";

    formTitle.textContent = profileStrings.title;
    user.profileImg ? profileImg.src = user.profileImg : profileImg.src = profileStrings.userImg.src;
    profileImg.alt = profileStrings.userImg.alt;
    profileImg.id = profileStrings.userImg.id;
    profileChangeImg.src = profileStrings.editIcon.src;
    profileChangeImg.alt = profileStrings.editIcon.alt;
    profileChangeDiv.style.cursor = "pointer";
    const dialog = dialogCreator("", "", profileStrings.userImg.type, profileStrings.userImg.id);

    profileChangeDiv.addEventListener("click", () => {
        dialog.showModal();
    });

    profileStrings.right.forEach(element => {
        const itemDiv = document.createElement("div");
        const itemLabel = document.createElement("span");
        let itemValue = document.createElement("span");
        const editIcon = document.createElement("img");
        const dialog = dialogCreator(element.label, element.placeholder, element.type, element.id);

        itemDiv.className = "labelContainer";
        itemLabel.className = "cardItemLabel";
        itemValue.className = "cardItemValue";
        editIcon.className = "profileEditIcon";

        switch (element.id) {
            case "username":
                itemValue.textContent = user.username;
                break;
            case "firstName":
                itemValue.textContent = user.firstName;
                break;
            case "lastName":
                itemValue.textContent = user.lastName;
                break;
            case "birthday":
                itemValue.textContent = user.birthday.split(" ")[0];
                break;
            case "email":
                itemValue.textContent = user.email;
                break;
        }

        itemLabel.textContent = element.label;
        itemValue.id = element.id;
        editIcon.src = profileStrings.editIcon.src;
        editIcon.alt = profileStrings.editIcon.alt;
        editIcon.style.cursor = "pointer";
        editIcon.addEventListener("click", () => {
            dialog.showModal();
        });

        itemDiv.appendChild(itemLabel);
        itemDiv.appendChild(itemValue);
        itemDiv.appendChild(editIcon);
        formRightContainer.appendChild(dialog);
        formRightContainer.appendChild(itemDiv);
    });

    formPrimaryButton.textContent = profileStrings.primaryButton;
    formPrimaryButton.style.cursor = "pointer";
    formSecondaryButton.textContent = profileStrings.secondaryButton;
    formSecondaryButton.style.cursor = "pointer";

    formPrimaryButton.addEventListener("click", () => {
        clearInputs();
        pageRouter(pageModel.list[0]);
    });

    formSecondaryButton.addEventListener("click", () => {
        logout();
    });

    profileChangeDiv.appendChild(profileChangeImg);
    profileImgDiv.appendChild(profileImg);
    profileImgDiv.appendChild(profileChangeDiv);
    formContainer.appendChild(formTitle);
    formLeftContainer.appendChild(profileImgDiv);
    formInputContainer.appendChild(formLeftContainer);
    formInputContainer.appendChild(formRightContainer);
    formContainer.appendChild(formInputContainer);
    buttonsDiv.appendChild(formPrimaryButton);
    buttonsDiv.appendChild(formSecondaryButton);
    formContainer.appendChild(dialog);
    formContainer.appendChild(buttonsDiv);
    screenGrandient.appendChild(formContainer);
    profileScreen.appendChild(screenGrandient);


    return profileScreen;
}