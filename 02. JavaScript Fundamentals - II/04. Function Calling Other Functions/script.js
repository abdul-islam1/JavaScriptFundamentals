"use strict";

const percentageWorld = (population) => ((population / 7900) * 100).toFixed(1);

const describePopulation = (country, population) => {
  return `${country} has ${population} million people, which is about ${percentageWorld(
    population
  )}% of the world.`;
};

console.log(describePopulation("China", 1441));
console.log(describePopulation("China", 1441));
console.log(describePopulation("China", 1441));
