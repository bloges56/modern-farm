export const harvestPlants = (field) => {
    var harvestedPlants = [];
    
    for(var plant of field){
        var amount = plant.output;
        if(plant.type === "Corn"){
            amount = amount / 2;
        }
        for(var k = 0; k < amount; k++){
            harvestedPlants.push(plant);
        }
    }

    return harvestedPlants;

};