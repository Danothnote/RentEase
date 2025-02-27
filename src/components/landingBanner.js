import { landingStrings } from "../model/landingStrings";

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
primaryButton.href = "#";
secondaryButton.href = "#";

landingTitleDiv.appendChild(landingTitle);
landingButtons.appendChild(primaryButton);
landingButtons.appendChild(secondaryButton);

landingBanner.appendChild(landingTitleDiv);
landingBanner.appendChild(landingButtons);

export default landingBanner;