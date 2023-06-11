let js = "amazing";
if (js === "amazing") alert("java script is fun!");
// console.log(12 + 12);

//----> Coding Challenge #1 <------
const markMass = 78;
const markHeight = 1.69;
const johnHeight = 1.95;
const johnMass = 95;
const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const markHeigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI);
// console.log(markHeigherBMI);

//---->  Coding Challenge #2 <------
// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
// } else {
//   console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}!`);
// }

// ----> Challenge #3 <-----
// ------------>part(1)
// const averageScoreDolphins = (96 + 108 + 89) / 3;
// const averageScoreKoalas = (88 + 91 + 110) / 3;

// if (averageScoreDolphins > averageScoreKoalas) {
//   console.log(`Dolphins win wit ${averageScoreDolphins} point!`);
// } else if (averageScoreDolphins > averageScoreKoalas) {
//   console.log(`Koalas win wit ${averageScoreKoalas} point!`);
// } else {
//   console.log(`Draw`);
// }
// ------------->(Bonus 1)

// const averageScoreDolphins = (97 + 112 + 101) / 3;
// const averageScoreKoalas = (109 + 95 + 123) / 3;

// if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
//   console.log(`Dolphins win wit ${averageScoreDolphins} point!`);
// } else if (
//   averageScoreDolphins < averageScoreKoalas &&
//   averageScoreKoalas >= 100
// ) {
//   console.log(`koalas win wit ${averageScoreKoalas} point!`);
// }
// ------------->(Bonus 2)

const averageScoreDolphins = (97 + 112 + 101) / 3;
const averageScoreKoalas = (109 + 95 + 106) / 3;

if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
  console.log(`Dolphins win wit ${averageScoreDolphins} point!`);
} else if (
  averageScoreDolphins < averageScoreKoalas &&
  averageScoreKoalas >= 100
) {
  console.log(`koalas win wit ${averageScoreKoalas} point!`);
} else if (
  averageScoreDolphins === averageScoreKoalas &&
  averageScoreKoalas >= 100 &&
  averageScoreDolphins >= 100
) {
  console.log(`Draw`);
} else {
  console.log(`no one win`);
}

// ----> Challenge #4 <-----
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * (15 / 100) : bill * (20 / 100);
console.log(`“The bill was ${bill}, the tip was ${tip}, and the total value
${bill + tip}”
`);
