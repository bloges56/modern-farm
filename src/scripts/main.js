import { createPlan } from './plan.js'
import { plantSeeds } from './tractor.js'
import { usePlants } from './field.js'
import { harvestPlants } from './harvester.js'
import { Catalog } from './catalog.js'

console.log("Welcome to the main module")

var plan = createPlan();

plantSeeds(plan);

var field = usePlants();

var harvestedPlants = harvestPlants(field);

Catalog(harvestedPlants);


