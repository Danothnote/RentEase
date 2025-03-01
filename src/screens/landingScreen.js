import landingBanner from "./landingBanner";
import reviews from "../components/reviews";

const landingScreen = document.createElement("div");
landingScreen.append(landingBanner, reviews)

export default landingScreen;