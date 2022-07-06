// input
// let bilangan = 20;

function factor(number) {
  let result = "";
  // your code here
  for (let i = 0; i < number; i++) {
    if (number % i == 0) {
      result += `${i}\n`
    }
  }
  return `${result}${number}`;
}

// console.log(factor(20));

module.exports = {factor}