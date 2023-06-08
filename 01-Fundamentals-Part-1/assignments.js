// (Values and Variables)
// let country = "Egypty";
// let continent = "Africa";
let population = 100;
// console.log(country);
// console.log(continent);
// console.log(population);

//(Data Type)
// let isIsland = false;
// let language;
// console.log(typeof isIsland);
// console.log(typeof language);
// console.log(typeof country);
// console.log(typeof population);

//let,const and var
language = "Arabic";
const country = "Egypt";
const continent = "Africa";
const isIsland = false;
// try to change one of them
// country = "Tunis";

// Basic Operators
// 2**3 ---> means 2 the power of   3=2*2*2
// x += 10 ---> means x = x + 10
// x *= 10 ---> means x = x * 10
// x++; ---> means x = x +1
// x--; ---> means x = x -1

console.log(population / 2);
population++;
console.log(population);
let finland = 6;
console.log(population > finland);
console.log(population < finland);
const description =
  "Portugal is in Europe,its about 11 million people speak protuguese";
console.log(description);

//Strings and Template Literals
const description0 = `${country} is in ${continent}, its about ${population} million people speak ${language} `;

//Taking Decisions: if / else Statements
if (population > 33) {
  console.log(` ${country} population is ${population} above average`);
} else {
  console.log(` ${country} population is ${33 - population} below average`);
}
