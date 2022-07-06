const { playWithAsterik } = require("./problem1");

describe("test Asterik", () => {
  it("Bentuk Segitiga", () => {
    expect(playWithAsterik(1)).toBe(`\n*\n`);
  });
  it("Bentuk Segitiga", () => {
    expect(playWithAsterik(3)).toBe(`\n*\n**\n***\n`);
  });
});
