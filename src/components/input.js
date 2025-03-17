export const createInput = (label, placeholder, type, id, options, allFlats, allFlatsFilter) => {
    const inputDiv = document.createElement("div");
    inputDiv.className = "formInputDiv";

    if (label) {
        let tag = "";
        if (allFlats && !allFlatsFilter) {
            tag = "h2";
        } else if (allFlats && allFlatsFilter) {
            tag = "h3";
        } else {
            tag = "p";
        }
        
        const inputLabel = document.createElement(tag);
        inputLabel.className = "formLabel";
        inputLabel.textContent = label;
        inputDiv.appendChild(inputLabel);
    }

    if (type === "select") {
        const select = document.createElement("select");
        
        options.forEach(option => {
            const optionElement = document.createElement("option");
            optionElement.textContent = option;
            select.appendChild(optionElement);
        });

        select.className = allFlats ? "flatsSelectInput" : "formSelectInput";
        select.id = id + "Input";
        inputDiv.appendChild(select);
    } else {
        const input = document.createElement('input');
        input.className = type === "searchBar" ? "searchBar" : "formInput";
        input.placeholder = placeholder;
        input.type = type === "searchBar" ? "text" : type;
        input.id = id + "Input";
        inputDiv.appendChild(input);
    }

    return inputDiv;
}