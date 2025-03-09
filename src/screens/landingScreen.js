import landingBanner from "../components/landingBanner";
import reviews from "../components/reviews";

export const createLandingScreen = () => {
    const landingScreen = document.createElement("div");
    landingScreen.append(landingBanner, reviews)

    return landingScreen;
}