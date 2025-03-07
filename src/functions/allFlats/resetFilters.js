export const resetFilters = () => {
    const filters = document.getElementsByClassName("flatsSelectInput");
    for (let select of filters) {
        select.value = select[0].value;
    }
}