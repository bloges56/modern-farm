export const Catalog = (food) => {
    var contentElement = document.querySelector(".container");
    for(var plant of food){
        contentElement.innerHTML += `
            <section class="plant">${plant.type}</section>
        `;
    }
};