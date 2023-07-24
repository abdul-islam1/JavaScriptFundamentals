"use strict;";
const myCountry = {
  country: "Pakistan",
  capital: "Islamabad",
  language: "Urdu",
  population: 220,
  neighbours: ["India", "Afghanistan", "Iran", "China", "Iran"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
    // this.isIsland = !Boolean(this.neighbours.length);
    this.island = this.neighbours.length > 0 ? false : true;
    return this.island;
  },
};
myCountry.describe();
console.log(myCountry.checkIsland());
console.log(myCountry.island);
