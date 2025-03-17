import { createLoadingDialog } from "../components/loadingDialog";
import { createTitle } from "../components/title";
import { addFlatsArray } from "../functions/allFlats/addFlatsArray";

export const createLoadingScreen = (contentScreen) => {
    const loadingScreen = document.createElement("div");
    const title = createTitle("Loading...", "h1");
    const title2 = createTitle("Loading...", "h1");
    const loadingDialog = document.createElement("dialog");
    const button = document.createElement("button");
    loadingScreen.className = "loadingScreen";
    button.textContent = "Cerrar";
    loadingDialog.className = "loadingDialog";
    button.addEventListener("click", () => {
        loadingDialog.showModal();
    });

    loadingDialog.appendChild(title2);
    loadingScreen.appendChild(title);
    loadingScreen.appendChild(button);
    loadingScreen.appendChild(loadingDialog);

    

    // addFlatsArray(contentScreen, loadingDialog);
    

    return loadingScreen;
}