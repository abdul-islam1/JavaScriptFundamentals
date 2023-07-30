"use strict";

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calTip = (bill) => (bill <= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill);

for (let i = 0; i < bills.length; i++) {
  tips[i] = calTip(bills[i]);
  totals[i] = tips[i] + bills[i];
}
console.log(bills);
console.log(tips);
console.log(totals);

//Bonus Task
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calTip = (bill) => (bill <= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill);

for (let i = 0; i < bills.length; i++) {
  tips[i] = calTip(bills[i]);
  totals[i] = tips[i] + bills[i];
}
console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log("The average amount paid per Dine-inn is:", calcAverage(totals));
