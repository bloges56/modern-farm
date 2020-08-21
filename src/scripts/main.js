import { createPlan } from './plan.js'
import { plantSeeds } from './tractor.js'
import { usePlants } from './field.js'

console.log("Welcome to the main module")

var plan = createPlan();

console.log(plan);

plantSeeds(plan);

var field = usePlants();

console.log("field:", field);