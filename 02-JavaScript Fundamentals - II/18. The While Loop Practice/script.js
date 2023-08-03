"use strict";

const percentageOfWorld1 = (population) => (population / 7900) * 100;
const population = [200, 300, 400, 500];
const percentages2 = [];
let i = 0;
while (i < population.length) {
  let pushValue = Number(percentageOfWorld1(population[i]).toFixed(1));
  percentages2.push(pushValue);
  i++;
}
console.log(percentages2);
