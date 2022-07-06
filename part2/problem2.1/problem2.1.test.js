const { factor } = require("./problem2.1");

describe("test Factor", () => {
  it("factor dari 6", () => {
    // const consoleSpy = jest.spyOn(console, "log");

    expect(factor(6)).toBe(`1\n2\n3\n6`);
    // expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(1));
  });
});
