import { createPlan } from './plan.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { addPlant, usePlants } from './field.js'

console.log("Welcome to the main module")

var plan = createPlan();

console.log(plan);

const asparagusSeed = createAsparagus();

console.log(asparagusSeed);

const cornSeed = createCorn();

console.log(cornSeed);

addPlant(asparagusSeed);
addPlant(cornSeed);

var field = usePlants();

console.log("field:", field);