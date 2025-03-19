import { createLandingScreen } from "../screens/landingScreen";
import { createLoginScreen } from "../screens/loginScreen";
import { createSignupScreen } from "../screens/signupScreen";
import { pageModel } from "../model/pageModel";
import { createNewFlatScreen } from "../screens/newFlatScreen";
import { createProfileScreen } from "../screens/profileScreen";
import { addFlatsArray } from "./allFlats/addFlatsArray";
import { pb } from "./pocketbase/newPocketbase";

export const pageRouter = (page) => {
    const contentScreen = document.querySelector("#contentScreen");
    pb.collection("flats").unsubscribe();
    switch (page) {
        case pageModel.list[0]:
            pageModel.actual = pageModel.list[0];
            contentScreen.replaceChildren(createLandingScreen());
            break;
        case pageModel.list[1]:
            pageModel.actual = pageModel.list[1];
            contentScreen.replaceChildren(createLoginScreen());
            break;
        case pageModel.list[2]:
            pageModel.actual = pageModel.list[2];
            contentScreen.replaceChildren(createSignupScreen());
            break;
        case pageModel.list[3]:
            pageModel.actual = pageModel.list[3];
            addFlatsArray(contentScreen);
            break;
        case pageModel.list[4]:
            pageModel.actual = pageModel.list[4];
            contentScreen.replaceChildren(createNewFlatScreen());
            break;
        case pageModel.list[5]:
            pageModel.actual = pageModel.list[5];
            contentScreen.replaceChildren(createProfileScreen());
            break;
    }
}