// ***********(Functions)***********

function describeCountry(country, population, capitalcity) {
  const informCountry = `${country} has ${population} million people and its capitalcity is ${capitalcity}`;
  return informCountry;
}
const theResult1 = describeCountry("Finland", 6, "Helsinki");
const theResult2 = describeCountry("Egypt", 100, "cairo");
const theResult3 = describeCountry("italy", 75, "Roma");

console.log(theResult1, theResult2, theResult3);
