function playWithAsterik(n) {
  let pattren = "";
  // your code here
  for (let i = 0; i <= n; i++) {
    for (let k = 1; k <= i; k++) {
      pattren += "*";
    }
    pattren += "\n";
  }
  return pattren;
}
// console.log(playWithAsterik(3));

module.exports = { playWithAsterik };