function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const x = describeCountry("USA", 30, "Washington DC");
const y = describeCountry("Canada", 3, "Ontario");
const z = describeCountry("Australia", 300, "Canberra");

console.log(x);
console.log(y);
console.log(z);
