var types = ["Soybean", "Corn", "Asparagus", "Wheat", "Potato", "Sunflower"];
types.sort();

export const Catalog = (food) => {
    var contentElement = document.querySelector(".food-table");

    var foodQuantity= {
        'Asparagus': 0,
        'Corn': 0,
        'Potato': 0,
        'Soybean': 0,
        'Sunflower': 0,
        'Wheat': 0
    }

   
    
    for(var plant of food){
        for(var type of Object.keys(foodQuantity)){
            if(type === plant.type){
                foodQuantity[type] += 1;
            }
        }
    }

   

    for(var plant of Object.keys(foodQuantity)){
        contentElement.innerHTML += `
            <tr>
                <td>${plant}</td>
                <td>${foodQuantity[plant]}</td>
            </tr>
        `;
    }
};