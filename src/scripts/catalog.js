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

   
    
    food.map(plant => {
        Object.keys(foodQuantity).map(type =>{
            if(type === plant.type){
                foodQuantity[type] += 1;
            }
        })
    })

   

    Object.keys(foodQuantity).map(plant =>{
        contentElement.innerHTML += `
            <tr>
                <td>${plant}</td>
                <td>${foodQuantity[plant]}</td>
            </tr>
        `;
    })
};