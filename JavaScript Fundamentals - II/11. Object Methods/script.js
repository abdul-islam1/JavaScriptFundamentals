"use strict";
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: false,
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${
      this.hasDriversLicense === true /// look for the efficiency
        ? "a driver's license." /// look for the efficiency
        : "no driver's license." /// look for the efficiency
    } `;
    return this.summary;
  },
};
console.log(jonas.getSummary());
console.log(jonas.age);
console.log(jonas.summary);

// "Jonas is a 46-year old teacher, and he has a driver's license"
