"use strict";

const Mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const John = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
Mark.calcBMI();
John.calcBMI();
console.log(
  `${
    Mark.BMI > John.NMI
      ? Mark.fullName +
        "'s BMI (" +
        Mark.BMI.toFixed(1) +
        ")" +
        " is higher than " +
        John.fullName +
        "'s BMI (" +
        John.BMI.toFixed(1) +
        ")"
      : John.fullName +
        "'s BMI (" +
        John.BMI.toFixed(1) +
        ")" +
        " is higher than " +
        Mark.fullName +
        "'s BMI (" +
        Mark.BMI.toFixed(1) +
        ")"
  }`
);
