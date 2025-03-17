import { dialogCreator } from "../components/dialogCreator";
import { createErrorDialog } from "../components/errorDialog";
import { createLoadingDialog } from "../components/loadingDialog";
import { createButton } from "../components/button";
import { clearInputs } from "../functions/clearInputs";
import { pageRouter } from "../functions/pageRouter";
import { logout } from "../functions/pocketbase/logout";
import { pageModel } from "../model/pageModel";
import { profileStrings } from "../model/profile/profileStrings";
import { userData } from "../model/userData";
import { createTitle } from "../components/title";
import { createItemDiv } from "../components/itemDiv";
import { addUser } from "../functions/navbar/addUser";

export const createProfileScreen = () => {
    const profileScreen = document.createElement("div");
    const screenGrandient = document.createElement("div");
    const loadingDialog = createLoadingDialog();
    const errorDialog = createErrorDialog();
    const formContainer = document.createElement("div");
    const formInputContainer = document.createElement("div");
    const formLeftContainer = document.createElement("div");
    const formRightContainer = document.createElement("div");
    const profileImgDiv = document.createElement("div");
    const buttonsDiv = document.createElement("div");
    const profileImg = document.createElement("img");
    const profileChangeDiv = document.createElement("div");
    const profileChangeImg = document.createElement("img");
    const formTitle = createTitle(profileStrings.title, "h1");
    const formPrimaryButton = createButton(profileStrings.primaryButton, true);
    const formSecondaryButton = createButton(profileStrings.secondaryButton, false);

    profileScreen.className = "profileScreen";
    screenGrandient.className = "containerGradient";
    formContainer.className = "formContainer";
    formInputContainer.className = "profileFormInputContainer";
    formLeftContainer.className = "formLeftContainer";
    formRightContainer.className = "formRightContainer";
    buttonsDiv.className = "profileButtonsDiv";
    profileImgDiv.className = "profileImgDiv";
    profileImg.className = "profileImg";
    profileChangeDiv.className = "profileChangeDiv";
    profileChangeImg.className = "profileEditIcon";

    const user = JSON.parse(localStorage.getItem("auth"))
    addUser(user);

    profileImg.src = userData.userClass.profileImg;
    profileImg.alt = profileStrings.userImg.alt;
    profileImg.id = profileStrings.userImg.id;
    profileChangeImg.src = profileStrings.editIcon.src;
    profileChangeImg.alt = profileStrings.editIcon.alt;
    profileChangeDiv.style.cursor = "pointer";
    const dialog = dialogCreator("", "", profileStrings.userImg.type, profileStrings.userImg.id, loadingDialog, errorDialog);

    profileChangeDiv.addEventListener("click", () => {
        dialog.showModal();
    });

    profileStrings.right.forEach(element => {
        let itemValue = "";
        const dialog = dialogCreator(element.label, element.placeholder, element.type, element.id, loadingDialog, errorDialog);
        switch (element.id) {
            case "username":
                itemValue = userData.userClass.getUsername();
                break;
            case "firstName":
                itemValue = userData.userClass.getFirstName();
                break;
            case "lastName":
                itemValue = userData.userClass.getLastName();
                break;
            case "birthday":
                itemValue = userData.userClass.getBirthday().split(" ")[0];
                break;
            case "email":
                itemValue = userData.userClass.getEmail();
                break;
        }

        const itemDiv = createItemDiv(element.label, itemValue, element.id, profileStrings.editIcon.src, profileStrings.editIcon.alt);
        const editIcon = itemDiv.childNodes[2];
        editIcon.addEventListener("click", () => {
            dialog.showModal();
        });

        formRightContainer.appendChild(dialog);
        formRightContainer.appendChild(itemDiv);
    });

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
    screenGrandient.appendChild(loadingDialog);
    screenGrandient.appendChild(errorDialog);
    screenGrandient.appendChild(formContainer);
    profileScreen.appendChild(screenGrandient);


    return profileScreen;
}