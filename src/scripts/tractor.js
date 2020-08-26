import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'
import { addPlant } from './field.js'

export const plantSeeds = (plan) => {
    for(var i of plan){
        for(var j of i){
            if(j === "Asparagus"){
                addPlant(createAsparagus());
            }
            if(j === "Corn"){
                var corns = createCorn();
                addPlant(corns[0]);
                addPlant(corns[1]);
            }
            if(j === "Potato"){
                addPlant(createPotato());
            }
            if(j === "Soybean"){
                addPlant(createSoybean());
            }
            if(j === "Sunflower"){
                addPlant(createSunflower());
            }
            if(j === "Wheat"){
                addPlant(createWheat());
            }
        }
    }
};