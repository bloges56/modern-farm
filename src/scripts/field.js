var allPlants = [];

var corn = false;

export const addPlant = (seed) => {
    corn = Array.isArray(seed);
    if(corn){
        allPlants.push(seed[0]);
        allPlants.push(seed[1]);
    }
    else {
        allPlants.push(seed);
    }
};

export const usePlants = () => {
    return allPlants;
}