import contentScreen from "./screens/contentScreen";
import { createFooter } from "./components/footer";
import { createNavbar } from "./components/navbar";
import { pageRouter } from "./functions/pageRouter";
import { pageModel } from "./model/pageModel";
import { isLoggedIn } from "./functions/isLoggedIn";

isLoggedIn();
document.querySelector("#app").appendChild(createNavbar());
document.querySelector("#app").appendChild(contentScreen);
document.querySelector("#app").appendChild(createFooter());

pageModel.actual = pageModel.list[0];
pageRouter(pageModel.actual);