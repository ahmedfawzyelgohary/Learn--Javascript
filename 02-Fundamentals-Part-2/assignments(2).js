/*
// ***********(Functions)***********
function describeCountry(country, population, capitalcity) {
  const informCountry = `${country} has ${population} million people and its capitalcity is ${capitalcity}`;
  return informCountry;
}
const theResult1 = describeCountry("Finland", 6, "Helsinki");
const theResult2 = describeCountry("Egypt", 100, "cairo");
const theResult3 = describeCountry("Italy", 59, "Rome");

// console.log(theResult1, theResult2, theResult3);

// ***********(: Function Declarations vs. Expressions)***********
// Function Declarations
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const percentageWorldFinlanda = percentageOfWorld1(6);
const percentageWorldEgypt = percentageOfWorld1(100);
const percentageWorldItaly = percentageOfWorld1(59);

// console.log(
//   `${percentageWorldEgypt} % , ${percentageWorldFinlanda} % , ${percentageWorldItaly} %`
// );

//Function Expression
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
const percentageWorldFinlanda1 = percentageOfWorld1(6);
const percentageWorldEgypt1 = percentageOfWorld1(100);
const percentageWorldItaly1 = percentageOfWorld1(59);
// console.log(
//   `${percentageWorldEgypt1} % , ${percentageWorldFinlanda1} % , ${percentageWorldItaly1} %`
// );

// ***********(Arrow Functions)***********
const percentageOfWorld3 = (population) => (population / 7900) * 100;

const percentageOfWorldFinlanda2 = percentageOfWorld3(6);
const percentageOfWorldEgypt2 = percentageOfWorld3(100);
const percentageOfWorldItaly2 = percentageOfWorld3(59);
// console.log(
//   `${percentageOfWorldEgypt2} % , ${percentageOfWorldFinlanda2} % , ${percentageOfWorldItaly2} %`
// );

// ***********(Functions calling other Functions)***********
function describePopulation(country, population) {
  const describePopulation = percentageOfWorld3(population);

  return `${country} has ${population} million peple,which is about ${describePopulation} % of the wolrd`;
}
// console.log(describePopulation("Egypt", 100));
// console.log(describePopulation("Finlanda", 6));
// console.log(describePopulation("Italy", 59));

// ***********(Introduction to Arrays)***********
// const population = ["Egypt", "Finlada", "Tunis", "Italy"];
// Whether the array has 4 elements or not
// console.log(population.length === 4);
// <------->
const percentages = [
  percentageWorldEgypt,
  percentageWorldFinlanda,
  percentageWorldItaly,
];
// console.log(percentages);
// ***********(Basic Array Operations (Methods))***********
const neighbours = ["Tunis", "Libya", "Palestine"];

// to adde value at the end
neighbours.push("Utopia");
// console.log(neighbours);
// to remove last value
neighbours.pop();
// console.log(neighbours);
// try include
if (!neighbours.includes("Germany")) {
  // console.log(`Probably not a central European Country :D`);
}
// try index of and replace
neighbours[neighbours.indexOf("Tunis")] = "Repalace of tunis";

// ***********(Introduction to Objects)***********
// const myCountry = {
//   country: "Egypt",
//   capital: "Cairo",
//   language: "Aribac",
//   population: 100,
//   neighbours: ["Tunis", "Libya", "Palestine"],
// };

// ***********(Dot vs. Bracket)***********
// (1)
// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people,${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}. `
// );
// (2)
// myCountry.population = 102;
// console.log(myCountry.population);
// //
// myCountry["population"] = 100;
// console.log(myCountry.population);

// ***********(Object Methods)***********
const myCountry = {
  country: "Egypt",
  capital: "Cairo",
  language: "Aribac",
  population: 100,
  neighbours: ["Tunis", "Libya", "Palestine"],

  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language} -speaking people,${this.neighbours.length} neighbours countries and a capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};
// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry);

// ***********(The For loob)***********
for (let rap = 1; rap <= 50; rap++) {
  // console.log(`Voter number ${rap} is currently voting 👀`);
}

// ***********(Looping Arrays, Breaking and Countinuing)***********
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const population = [100, 6, 10, 59];
// const percentageOfWorld4 = [];
// for (let i = 0; i < population.length; i++) {
//   const per = percentageOfWorld1(population[i]);
//   percentageOfWorld4.push(per);
// }
// // // console.log(percentageOfWorld4);

// ***********(Looping Backwards and Loops in Loops)***********
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++)
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    // console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
*/
// ***********(The While Looop)***********

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const population = [100, 6, 10, 59];
const percentageOfWorld4 = [];

let i = 0;
while (i < population.length) {
  const perc = percentageOfWorld1(population[i]);
  percentageOfWorld4.push(perc);
  i++;
}
// console.log(percentageOfWorld4);
