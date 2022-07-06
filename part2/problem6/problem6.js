function checkBilanganPrima(bil) {
  if (bil <= 1) return false;

  for (let i = 2; i < bil; i++) {
    if (bil % i == 0) return false;
  }
  return true;
}

function bilanganFullPrima(n) {
  let prima = 0;
  let check = n.toString().split("");
  for (let i = 0; i < check.length; i++) {
    prima += checkBilanganPrima(parseInt(check[i]));
  }

  prima += checkBilanganPrima(n);

  if (prima == check.length + 1) {
    return true;
  } else {
    return false;
  }
}

// console.log(bilanganFullPrima(2)); // true
// console.log(bilanganFullPrima(3)); // true
// console.log(bilanganFullPrima(11)); // false
// console.log(bilanganFullPrima(13)); // false
// console.log(bilanganFullPrima(23)); // true
// console.log(bilanganFullPrima(29)); // false
// console.log(bilanganFullPrima(37)); // true
// console.log(bilanganFullPrima(41)); // false
// console.log(bilanganFullPrima(43)); // false
// console.log(bilanganFullPrima(53)); // true

// export { checkBilanganPrima, bilanganFullPrima };

module.exports = {
  checkBilanganPrima,
  bilanganFullPrima,
};