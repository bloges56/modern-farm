var idIncrement = 1;

export const harvestPlants = (field) => {
    var harvestedPlants = [];
    
    field[0].id = 1;
    
    for(var plant of field){

        var amount = plant.output;
        if(plant.type === "Corn"){
            amount = amount / 2;
        }

        
        var newPlant;
        for(var k = 1; k <= amount; k++){
            newPlant = plant.create();
            if(Array.isArray(newPlant)){
                newPlant[0].id = idIncrement;
                harvestedPlants.push(newPlant[0])
            }
            else {
                newPlant.id = idIncrement;
                harvestedPlants.push(newPlant);
            }
            idIncrement+=1;
        }
    }
    return harvestedPlants;

};