// const { describe } = require("yargs");
// import { checkBilanganPrima, bilanganFullPrima } from "./problem6";
const { checkBilanganPrima, bilanganFullPrima } = require("./problem6");

describe("check bilangan ini prima", () => {
  it("will return false", () => {
    expect(checkBilanganPrima(1)).toBe(false);
  });
  it("will return false", () => {
    expect(checkBilanganPrima(10)).toBe(false);
  });
  it("will return false", () => {
    expect(checkBilanganPrima(11)).toBe(true);
  });
});

describe("check bilangan ini full prima", () => {
  it("ini bilangan fullprima", () => {
    expect(bilanganFullPrima(2)).toBe(true);
  });
  it("bukan bilangan full prima", () => {
    expect(bilanganFullPrima(11)).toBe(false);
  });
});
