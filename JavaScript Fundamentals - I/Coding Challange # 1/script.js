"use strict";

/*const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;*/

const massMark = 95;
const heightMark = 1.88;

const massJohn = 85;
const heightJohn = 1.76;

const bmiMark = massMark / (heightMark ** 2);
const bmiJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = bmiMark > bmiJohn;
console.log("BMI of Mark is: " + bmiMark + " and BMI of John is " + bmiJohn );
console.log(markHigherBMI);