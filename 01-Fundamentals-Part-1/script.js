let js = "amazing";
if (js === "amazing") alert("java script is fun!");
// console.log(12 + 12);

//Coding Challenge #1
const markMass = 78;
const markHeight = 1.69;
const johnHeight = 1.95;
const johnMass = 95;
const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const markHeigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI);
console.log(markHeigherBMI);

// Coding Challenge #2
if (markBMI > johnBMI) {
  console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
} else {
  console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}!`);
}
