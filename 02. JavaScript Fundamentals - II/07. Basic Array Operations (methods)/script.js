"use strict";

const neighbours = ["India", "Afghanistan", "Iran", "China"];
console.log("Neighbours: ", neighbours);
neighbours.push("Utopia");
console.log("Neighbours:", neighbours);
neighbours.pop();
console.log("Neighbours (new country removed):", neighbours);

neighbours.includes("germany")
  ? console.log("Probably is a centeral European country.")
  : console.log("Probably is not a centeral European country. 😂");

neighbours[neighbours.indexOf("China")] = "People's Republic of China";

console.log(neighbours);
