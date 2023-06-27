"use strict";

//Assignment # 4..........................
const country = "Pakistan";
const continent = "Asia";
let populationPakistan = 250;
const isIsland = false;
const language = "Urdu";
const populationFinland = 6;
const avgPopulation = 33;
const description =
  country +
  " is in " +
  continent +
  " and its " +
  populationPakistan +
  " million people speak " +
  language +
  ".";

console.log(`Half Population of ${country} would be: ` + 250 / 2);
populationPakistan++;
console.log(populationPakistan);

console.log(populationFinland >= populationPakistan);
console.log(populationPakistan <= avgPopulation);
console.log(description);
