"use strict";

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    if (!(listOfNeighbours[i].length > 1)) continue;
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}