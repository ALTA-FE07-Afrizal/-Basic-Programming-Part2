const { studentScore } = require("./problem1");

describe("Check Nilai siswa", () => {
  it("Nilai anda D", () => {
    expect(studentScore(30)).toBe(`Nilai D`);
  });
  it("Nilai anda C", () => {
    expect(studentScore(45)).toBe(`Nilai C`);
  });
  it("Nilai anda B", () => {
    expect(studentScore(55)).toBe(`Nilai B`);
  });
  it("Nilai anda B+", () => {
    expect(studentScore(75)).toBe(`Nilai B+`);
  });
  it("Nilai anda A", () => {
    expect(studentScore(90)).toBe(`Nilai A`);
  });
  it("Bukan Nilai", () => {
    expect(studentScore(101)).toBe(`input nilai di bawah 100`);
  });
});
