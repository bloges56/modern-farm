import { createPlan } from './plan.js'
import { plantSeeds } from './tractor.js'
import { usePlants } from './field.js'
import { harvestPlants } from './harvester.js'

console.log("Welcome to the main module")

var plan = createPlan();

console.log(plan);

plantSeeds(plan);

var field = usePlants();

console.log("field:", field);

var harvestedPlants = harvestPlants(field);

console.log("harvested plants:", harvestedPlants);