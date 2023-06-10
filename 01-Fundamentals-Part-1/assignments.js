//---->  (Values and Variables) <------
// let country = "Egypty";
// let continent = "Africa";
let population = 100;
// console.log(country);
// console.log(continent);
// console.log(population);

//----> (Data Type) <-----
// let isIsland = false;
// let language;
// console.log(typeof isIsland);
// console.log(typeof language);
// console.log(typeof country);
// console.log(typeof population);

//----> let,const and var <-----
// language = "Arabic";
const country = "Egypt";
const continent = "Africa";
const isIsland = false;
// try to change one of them
// country = "Tunis";

//---->  Basic Operators <-----
// 2**3 ---> means 2 the power of   3=2*2*2
// x += 10 ---> means x = x + 10
// x *= 10 ---> means x = x * 10
// x++; ---> means x = x +1
// x--; ---> means x = x -1

// console.log(population / 2);
population++;
// console.log(population);
let finland = 6;
// console.log(population > finland);
// console.log(population < finland);
const description =
  "Portugal is in Europe,its about 11 million people speak protuguese";
// console.log(description);

//----> Strings and Template Literals <------
// const description0 = `${country} is in ${continent}, its about ${population} million people speak ${language} `;

//Taking Decisions: if / else Statements
// if (population > 33) {
//   console.log(` ${country} population is ${population} above average`);
// } else {
//   console.log(` ${country} population is ${33 - population} below average
// `);
// }

//---->  Type Conversion and coercion <-----
"9" - "5"; //result 4
"19" - "13" + "17"; //result 617
"19" - "13" + 17; //result 23
"123" < 57; //result false
5 + 6 + "4" + 9 - 4 - 2; //result 1143

//----> (Equality Operators: == vs. ===) <------
// const numNeighbours = Number(
//   prompt("How many neighbour countries dose your country have?")
// );
// if (numNeighbours === 1) {
//   console.log("only 1 border");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 borde");
// } else {
//   console.log("No borders'");
// }

//----> Logical Operators <------
// $$ --> (AND)
// || --> (OR)

// if (language === "English" && population > 50 && !islanda) {
//   console.log(`you should live in ${country} 😊`);
// } else {
//   console.log(`'${country} does not meet your criteria 😢`);
// }

//----> The switch statement <------
const language = `chinese`;
switch (language) {
  case `chinese`:
  case ` mandarin`:
    console.log("MOST number of native speakers!");
    break;
  case `spanish`:
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

//----> The Conditional (Ternary) Operator <------
const countryPopulation =
  population >= 130
    ? `Egypt's population is above average`
    : `Egypt's population is below average`;
console.log(countryPopulation);
