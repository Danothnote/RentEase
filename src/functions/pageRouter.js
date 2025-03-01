import landingScreen from "../screens/landingScreen";
import loginScreen from "../screens/loginScreen";
import signupScreen from "../screens/signupScreen";
import { pageModel } from "../model/pageModel";
import newFlatScreen from "../screens/newFlatScreen";

export const pageRouter = (page) => {
    switch (page) {
        case pageModel.list[0]:
            pageModel.actual = pageModel.list[0];
            document.querySelector("#contentScreen").replaceChildren(landingScreen);
            break;
        case pageModel.list[1]:
            pageModel.actual = pageModel.list[1];
            document.querySelector("#contentScreen").replaceChildren(loginScreen);
            break;
        case pageModel.list[2]:
            pageModel.actual = pageModel.list[2];
            document.querySelector("#contentScreen").replaceChildren(signupScreen);
            break;
        case pageModel.list[3]:
            pageModel.actual = pageModel.list[3];
            document.querySelector("#contentScreen").replaceChildren();
            break;
        case pageModel.list[4]:
            pageModel.actual = pageModel.list[4];
            document.querySelector("#contentScreen").replaceChildren(newFlatScreen);
            break;
        default:
            break;
    }
}