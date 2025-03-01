import landingBanner from "./landingBanner";
import reviews from "./reviews";

const landingScreen = document.createElement("div");
landingScreen.append(landingBanner, reviews)

export default landingScreen;