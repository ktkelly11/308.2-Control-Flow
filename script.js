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
// "There is room for more plants"

if (plantAreaWeek2 >= area * 0.8) {
  console.log("Time to Prune!");
} else if (plantAreaWeek2 > area * 0.5 && plantAreaWeek2 < area * 0.8) {
  console.log("Monitor the plants!");
} else {
  console.log("There is room for more plants");
}
// "There is room for more plants"

if (plantAreaWeek3 >= area * 0.8) {
  console.log("Time to Prune!");
} else if (plantAreaWeek3 > area * 0.5 && plantAreaWeek3 < area * 0.8) {
  console.log("Monitor the plants!");
} else {
  console.log("There is room for more plants!");
}
// "Time to prune!"

let plantsWeek2andAHalf = plantsWeek2 + plantsWeek1 / 2;
console.log(plantsWeek2andAHalf);
// 50 plants

const plantAreaWeek2andAHalf = plantArea * plantsWeek2andAHalf;
console.log(plantAreaWeek2andAHalf);
// 40 meters

if (plantAreaWeek2andAHalf >= area * 0.8) {
  console.log("Time to Prune!");
} else if (
  plantAreaWeek2andAHalf > area * 0.5 &&
  plantAreaWeek2andAHalf < area * 0.8
) {
  console.log("Monitor the plants!");
} else {
  console.log("There is room for more plants!");
}
// "Monitor the plants!"

// Part 2: Thinking Bigger
const newPlants = 100;

const newPlantsWeek2 = newPlants * 2;
console.log(newPlantsWeek2);
// 200 plants

const newPlantsWeek3 = newPlantsWeek2 * 2;
console.log(newPlantsWeek3);
// 400 plants

const newPlantsWeek4 = newPlantsWeek3 * 2;
console.log(newPlantsWeek4);
// 800 plants

const newPlantsWeek5 = newPlantsWeek4 * 2;
console.log(newPlantsWeek5);
// 1600 plants

const newPlantsWeek6 = newPlantsWeek5 * 2;
console.log(newPlantsWeek6);
// 3200 plants

const newPlantsWeek7 = newPlantsWeek6 * 2;
console.log(newPlantsWeek7);
// 6400 plants

const newPlantsWeek8 = newPlantsWeek7 * 2;
console.log(newPlantsWeek8);
// 12800 plants

const newPlantsWeek9 = newPlantsWeek8 * 2;
console.log(newPlantsWeek9);
// 25600 plants

const newPlantsWeek10 = newPlantsWeek9 * 2;
console.log(newPlantsWeek10);
// 51200 plants

// Failed loop to figure out number of new plants
// let weeks = 10;
// let weekPlants = 100;

// while (week <= 10) {
//   if ((weekPlants * weekPlants) ** 10) {
//     console.log();
//   }
//   week++;
// }

const plantSpace = newPlantsWeek10 * plantArea;
console.log(plantSpace);
// They need 40,960 meters of space

const spaceDifference = plantSpace - area;
console.log(spaceDifference);
// The difference in space between the new garden and the last garden is 40881.46 meters

// area = PI * r * r
// spaceDifference = PI * r * r;
// spaceDifference/PI = r * r
const newArea = spaceDifference / PI;
console.log(newArea);
// 13013.35
const newRadius = Math.sqrt(newArea);
console.log(newRadius);
// 114.08 meters

// Part 3: Errors in Judgement
