"use strict";

let dice = Math.trunc(Math.random() * 6 + 1);
let diceResults = [];
let i = 0;
if (dice === 6) {
  diceResults[0] = 6;
  i++;
}
while (dice !== 6) {
  console.log(dice);
  diceResults[i] = dice;
  i++;
  dice = Math.trunc(Math.random() * 6 + 1);

  if (dice === 6) {
    console.log("Now dice is 6 so, ending the loop...");
    diceResults.push(dice);
  }
}

console.log(`Results: `, diceResults);
