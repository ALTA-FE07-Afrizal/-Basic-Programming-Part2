function studentScore(score) {
  switch (true) {
    case score <= 35:
      return `Nilai D`;
    case score <= 50:
      return `Nilai C`;
    case score <= 65:
      return `Nilai B`;
    case score <= 79:
      return `Nilai B+`;
    case score <= 100:
      return `Nilai A`;
    default:
      return `input nilai di bawah 100`;
  }
}

// console.log(studentScore(100));
// console.log(studentScore(30));

module.exports = { studentScore };
