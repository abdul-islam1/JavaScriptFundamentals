const printForecast = (arr) => {
  let dispStr = "";
  for (let i = 0; i <= arr.length - 1; i++) {
    dispStr += `... ${arr[i]}\u2103 in ${i + 1} days `;
  }
  return dispStr + " ...";
};

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
