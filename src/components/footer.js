import { footerStrings } from "../model/footer/footerStrings";

export const createFooter = () => {
    // Creando los elementos del footer
    const footerDiv = document.createElement("div");
    const footerTitle = document.createElement("h1");
    const footerContent = document.createElement("div");
    const footerAbout = document.createElement("div");
    const footerSocial = document.createElement("div");
    const footerContact = document.createElement("div");
    const footerAboutTitle = document.createElement("h2");
    const footerSocialTitle = document.createElement("h2");
    const footerContactTitle = document.createElement("h2");
    const footerAboutContent = document.createElement("div");
    const footerSocialContent = document.createElement("div");
    const footerContactContent = document.createElement("div");

    //Asignando clases a los elementos del footer
    footerDiv.className = "footer";
    footerDiv.id = "footer"
    footerTitle.className = "footerTitle";
    footerContent.className = "footerContent";
    footerAbout.className = "footerContainer";
    footerSocial.className = "footerContainer";
    footerContact.className = "footerContainer";
    footerAboutTitle.className = "footerSubtitle";
    footerSocialTitle.className = "footerSubtitle";
    footerContactTitle.className = "footerSubtitle";
    footerAboutContent.className = "footerDivContent";
    footerSocialContent.className = "footerDivContent";
    footerContactContent.className = "footerDivContent";

    //Asignando los títulos al footer
    footerTitle.textContent = footerStrings.title;
    footerAboutTitle.textContent = footerStrings.about;
    footerSocialTitle.textContent = footerStrings.social;
    footerContactTitle.textContent = footerStrings.contact;

    // Creando el div de About
    footerAbout.appendChild(footerAboutTitle);
    footerStrings.aboutList.forEach(element => {
        const item = document.createElement("li");
        item.textContent = element;
        footerAboutContent.appendChild(item);
    })
    footerAbout.appendChild(footerAboutContent);

    //Creando el div de Social
    footerSocial.appendChild(footerSocialTitle);
    footerStrings.socialList.forEach(element => {
        const item = document.createElement("div");
        const icon = document.createElement("img");
        const link = document.createElement("a");
        item.className = "footerListItem";
        icon.className = "footerIcon";
        link.className = "footerLink";

        icon.src = `src/assets/${element.toLowerCase()}.webp`;
        icon.alt = element;
        link.href = `https://${element.toLocaleLowerCase()}.com`;
        link.textContent = element;

        item.appendChild(icon);
        item.appendChild(link);
        footerSocialContent.appendChild(item);
    })
    footerSocial.appendChild(footerSocialContent);

    //Creando el div de Contact
    footerContact.appendChild(footerContactTitle);
    footerStrings.contactList.forEach(element => {
        const item = document.createElement("div");
        const icon = document.createElement("img");
        const link = document.createElement("a");
        item.className = "footerListItem";
        icon.className = "footerIcon";
        link.className = "footerLink";

        icon.src = "src/assets/whatsapp.webp";
        icon.alt = "whatsapp";
        link.textContent = element;
        item.appendChild(icon);
        item.appendChild(link);
        footerContactContent.appendChild(item);
    })
    footerContact.appendChild(footerContactContent);

    //Agregando los divs al footer
    footerContent.appendChild(footerAbout);
    footerContent.appendChild(footerSocial);
    footerContent.appendChild(footerContact);
    footerDiv.appendChild(footerTitle);
    footerDiv.appendChild(footerContent);

    return footerDiv;
}