import { createLandingBanner } from "../components/landingBanner";
import { createReviews } from "../components/reviews";

export const createLandingScreen = () => {
    const landingScreen = document.createElement("div");
    landingScreen.className = "landingScreen";
    landingScreen.append(createLandingBanner(), createReviews());

    return landingScreen;
}