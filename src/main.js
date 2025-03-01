import contentScreen from "./screens/contentScreen";
import footerDiv from "./components/footer";
import navbar from "./components/navbar";
import { pageRouter } from "./functions/pageRouter";
import { pageModel } from "./model/pageModel";

document.querySelector("#app").appendChild(navbar);
document.querySelector("#app").appendChild(contentScreen);
document.querySelector("#app").appendChild(footerDiv);
pageRouter(pageModel.actual);

