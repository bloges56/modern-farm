export const Catalog = (food) => {
    var contentElement = document.querySelector(".container");

    var foodArray =[];

    for(var plant of food){
        foodArray.push(plant.type);
    }

    foodArray.sort();

    for(var plant of foodArray){
        contentElement.innerHTML += `
            <section class="plant">${plant}</section>
        `;
    }
};