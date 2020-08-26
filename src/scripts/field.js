var allPlants = [];


export const addPlant = (seed) => {
   
    allPlants.push(seed);
    
};

export const usePlants = () => {
    return allPlants;
}