function percentageOfWorld1(population) {
  return ((population / 7900) * 100).toFixed(1) + "%";
}

const percentage1 = percentageOfWorld1(1441);
console.log(percentage1);

const percentageOfWorld2 = function (population) {
  return ((population / 7900) * 100).toFixed(1) + "%";
};
// const percentage2 = percentageOfWorld2(1441);
const percentage22 = percentageOfWorld2(30);
const percentage222 = percentageOfWorld2(500);
percentage2 = percentage2.replace("%", "");
console.log(typeof percentage2);
console.log(percentage22);
console.log(percentage222);

// const percentageOfWorld2 = function (population) {
//   return ((population / 7900) * 100).toFixed(1) + "%";
// };
let percentage2 = percentageOfWorld2(1441);
percentage2 = percentage2.replace("%", "");
percentage2 = Number(percentage2);

console.log(typeof [percentage2]);
