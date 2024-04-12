// Part 1: Growing Pains
const PI = 3.1415;
const totalRadius = 5;
const plantArea = 0.8;
let plantsWeek1 = 20;

const area = 5 * 5 * PI;
console.log(area);
// total area is 78.54 meters

// Week #1
const plantAreaWeek1 = plantArea * plantsWeek1;
console.log(plantAreaWeek1);
// During the first week the 20 plants require 16 meters

// The plants double in number every week!
// Predict the plant growth after a specific number of weeks.
// Week #2
let plantsWeek2 = plantsWeek1 * 2;
console.log(plantsWeek2);
// 40 plants

const plantAreaWeek2 = plantArea * plantsWeek2;
console.log(plantAreaWeek2);
// 32 meters

// Week #3
let plantsWeek3 = plantsWeek2 * 2;
console.log(plantsWeek3);
// 80 plants

const plantAreaWeek3 = plantArea * plantsWeek3;
console.log(plantAreaWeek3);
// 64 meters

// Week 4
let plantsWeek4 = plantsWeek3 * 2;
console.log(plantsWeek4);
// 160 plants

console.log(plantArea * plantsWeek4);
// 128 meters (has exceeded the total area of 78.54 meters)

const maxPlants = area / plantArea;
console.log(maxPlants);
// maximum number of plants is 98 plants

if (plantAreaWeek1 >= area * 0.8) {
  console.log("Time to Prune!");
} else if (plantAreaWeek1 > area * 0.5 && plantAreaWeek1 < area * 0.8) {
  console.log("Monitor the plants!");
} else {
  console.log("There is room for more plants");
}

if (plantAreaWeek2 >= area * 0.8) {
  console.log("Time to Prune!");
} else if (plantAreaWeek2 > area * 0.5 && plantAreaWeek2 < area * 0.8) {
  console.log("Monitor the plants!");
} else {
  console.log("There is room for more plants");
}

if (plantAreaWeek3 >= area * 0.8) {
  console.log("Time to Prune!");
} else if (plantAreaWeek3 > area * 0.5 && plantAreaWeek3 < area * 0.8) {
  console.log("Monitor the plants!");
} else {
  console.log("There is room for more plants!");
}
