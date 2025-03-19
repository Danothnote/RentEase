export const resetFilters = () => {
    const filters = document.getElementsByClassName("flatsSelectInput");
    const searchBar = document.getElementById("searchBarInput");
    searchBar.value = "";
    searchBar.dispatchEvent(new Event("input"));
    for (let select of filters) {
        select.value = select[0].value;
        select.dispatchEvent(new Event("change"));
    }
}