import footerDiv from "./components/footer";
import landingBanner from "./components/landingBanner";
import navbar from "./components/navbar";
import reviews from "./components/reviews";
import signupContainer from "./components/signup";
import { pageModel } from "./model/pageModel";

export let page = pageModel[2];

document.querySelector("#app").appendChild(navbar);

switch (page) {
    case "landing":
        document.querySelector("#app").append(landingBanner, reviews);
        break;
    case "login":
        document.querySelector("#app").appendChild();
        break;
    case "signup":
        document.querySelector("#app").appendChild(signupContainer);
        break;
    case "allFlats":
        document.querySelector("#app").appendChild();
        break;
    case "flat":
        document.querySelector("#app").appendChild();
        break;
    default:
        break;
}

document.querySelector("#app").appendChild(footerDiv);

