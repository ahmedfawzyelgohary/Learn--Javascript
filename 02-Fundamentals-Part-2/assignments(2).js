// ***********(Functions)***********
function describeCountry(country, population, capitalcity) {
  const informCountry = `${country} has ${population} million people and its capitalcity is ${capitalcity}`;
  return informCountry;
}
const theResult1 = describeCountry("Finland", 6, "Helsinki");
const theResult2 = describeCountry("Egypt", 100, "cairo");
const theResult3 = describeCountry("Italy", 59, "Rome");

console.log(theResult1, theResult2, theResult3);

// ***********(: Function Declarations vs. Expressions)***********
// Function Declarations
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const percentageWorldFinlanda = percentageOfWorld1(6);
const percentageWorldEgypt = percentageOfWorld1(100);
const percentageWorldItaly = percentageOfWorld1(59);

console.log(
  `${percentageWorldEgypt} % , ${percentageWorldFinlanda} % , ${percentageWorldItaly} %`
);

//Function Expression
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
const percentageWorldFinlanda1 = percentageOfWorld1(6);
const percentageWorldEgypt1 = percentageOfWorld1(100);
const percentageWorldItaly1 = percentageOfWorld1(59);
console.log(
  `${percentageWorldEgypt1} % , ${percentageWorldFinlanda1} % , ${percentageWorldItaly1} %`
);

// ***********(Arrow Functions)***********
const percentageOfWorld3 = (population) => (population / 7900) * 100;

const percentageOfWorldFinlanda2 = percentageOfWorld3(6);
const percentageOfWorldEgypt2 = percentageOfWorld3(100);
const percentageOfWorldItaly2 = percentageOfWorld3(59);
console.log(
  `${percentageOfWorldEgypt2} % , ${percentageOfWorldFinlanda2} % , ${percentageOfWorldItaly2} %`
);
