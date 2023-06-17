//---->  Coding Challenge #1 <------
// Test 1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas}) 🎉`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})🎉`);
  } else {
    console.log(`no one win ☹ `);
  }
}
// checkWinner(scoreDolphins, scoreKoalas);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
// checkWinner(scoreDolphins, scoreKoalas);

//---->  Coding Challenge #2 <------
function calcTip(bill) {
  return bill <= 300 && bill >= 50 ? bill * (15 / 100) : bill * (20 / 100);
}
console.log(calcTip(100));

const bills = [calcTip];
console.log(bills);
