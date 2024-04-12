// Part 1: Growing Pains
const PI = 3.1415;
const totalRadius = 5;
const plantRadius = 0.8;
let plantsWeek1 = 20;

const area = 5 * 5 * PI;
console.log(area);
// total area is 78.54 meters

const plantArea = 0.8 * 0.8;
console.log(plantArea);
// Area required per plant is 0.64 meters

// Week #1
console.log(plantArea * plantsWeek1);
// During the first week the 20 plants require 12.80 meters

// The plants double in number every week!
// Predict the plant growth after a specific number of weeks.
// Week #2
let plantsWeek2 = plantsWeek1 * 2;
console.log(plantsWeek2);
// 40 plants

console.log(plantArea * plantsWeek2);
// 25.60 meters

// Week #3
let plantsWeek3 = plantsWeek2 * 2;
console.log(plantsWeek3);
// 80 plants

console.log(plantArea * plantsWeek3);
// 51.20 meters

// Week 4
let plantsWeek4 = plantsWeek3 * 2;
console.log(plantsWeek4);
// 160 plants

console.log(plantArea * plantsWeek4);
// 102.40 meters (has exceeded the total area of 78.54 meters)
