export const scrollToFotter = () => {
    const footer = document.getElementById("footer");
    const footerPosition = footer.offsetTop;

    window.scrollTo({
        top: footerPosition,
        behavior: "smooth"
    });
}