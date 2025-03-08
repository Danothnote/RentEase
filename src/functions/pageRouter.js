import landingScreen from "../screens/landingScreen";
import loginScreen from "../screens/loginScreen";
import signupScreen from "../screens/signupScreen";
import { pageModel } from "../model/pageModel";
import newFlatScreen from "../screens/newFlatScreen";
import allFlatsScreen from "../screens/allFlatsScreen";
import profileScreen from "../screens/profileScreen";

export const pageRouter = (page) => {
    const contentScreen = document.querySelector("#contentScreen");
    switch (page) {
        case pageModel.list[0]:
            pageModel.actual = pageModel.list[0];
            contentScreen.replaceChildren(landingScreen);
            break;
        case pageModel.list[1]:
            pageModel.actual = pageModel.list[1];
            contentScreen.replaceChildren(loginScreen);
            break;
        case pageModel.list[2]:
            pageModel.actual = pageModel.list[2];
            contentScreen.replaceChildren(signupScreen);
            break;
        case pageModel.list[3]:
            pageModel.actual = pageModel.list[3];
            contentScreen.replaceChildren(allFlatsScreen);
            break;
        case pageModel.list[4]:
            pageModel.actual = pageModel.list[4];
            contentScreen.replaceChildren(newFlatScreen);
            break;
        case pageModel.list[5]:
            pageModel.actual = pageModel.list[5];
            contentScreen.replaceChildren(profileScreen);
            break;
        default:
            pageModel.actual = pageModel.list[0];
            contentScreen.replaceChildren(landingScreen);
            break;
    }
}