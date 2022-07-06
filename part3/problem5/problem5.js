function meanMedian(arrayInput) {
  // Your Code Here
  let result = "",
    mean = 0,
    median = 0;

  mean =
    arrayInput.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    ) / arrayInput.length;

  let middle = Math.floor(arrayInput.length / 2);

  if (arrayInput.length % 2 === 0) {
    median = (arrayInput[middle - 1] + arrayInput[middle]) / 2;
  } else {
    median = arrayInput[middle];
  }
  result += `${mean} ${median}`;
  return result;
}

// console.log(meanMedian([1, 2, 3, 4])); // 2.5 2.5
// console.log(meanMedian([1, 2, 3, 4, 5])); // 3 3
// console.log(meanMedian([7, 8, 9, 13, 15])); // 10.4 9
// console.log(meanMedian([10, 20, 30, 40, 50])); // 30 30
// console.log(meanMedian([15, 20, 30, 60, 120])); // 49 30
module.exports = { meanMedian };