import { verifyLoggedState } from "../functions/navbar/verifyLoggedState";
import { pageRouter } from "../functions/pageRouter";
import { landingStrings } from "../model/landing/landingStrings";
import { pageModel } from "../model/pageModel";

export const createLandingBanner = () => {
    const landingBanner = document.createElement("div");
    const landingTitleDiv = document.createElement("div");
    const landingTitle = document.createElement("h1");
    const landingButtons = document.createElement("div");
    const primaryButton = document.createElement("a");
    const secondaryButton = document.createElement("a");

    landingBanner.className = "landingBanner";
    landingTitleDiv.className = "landingTitleDiv";
    landingTitle.className = "landingTitle";
    landingButtons.className = "landingButtons";
    primaryButton.className = "landingPrimaryButton";
    secondaryButton.className = "landingSecondaryButton";

    landingTitle.textContent = landingStrings.landingTitle;
    primaryButton.textContent = landingStrings.primaryButton;
    secondaryButton.textContent = landingStrings.secondaryButton;
    secondaryButton.id = "landingNewFlat";
    primaryButton.addEventListener("click", () => {
        pageRouter(pageModel.list[3]);
    });

    secondaryButton.addEventListener("click", () => {
        verifyLoggedState() ? pageRouter(pageModel.list[4]) : alert("Por favor inicie sesión primero");
    });

    landingTitleDiv.appendChild(landingTitle);
    landingButtons.appendChild(primaryButton);
    landingButtons.appendChild(secondaryButton);

    landingBanner.appendChild(landingTitleDiv);
    landingBanner.appendChild(landingButtons);

    return landingBanner;
}