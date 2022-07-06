const { meanMedian } = require("./problem5");

describe("Test Funtion", () => {
  it("Tampil Mean dan Median", () => {
    expect(meanMedian([1, 2, 3, 4])).toBe(`2.5 2.5`);
  });
  it("Tampil Mean dan Median", () => {
    expect(meanMedian([10, 20, 30, 40, 50])).toBe(`30 30`);
  });
});
