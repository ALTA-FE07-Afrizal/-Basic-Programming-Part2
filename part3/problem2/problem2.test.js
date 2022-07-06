const { drawXYZ } = require("./problem2");

describe("funtion Draw XYZ", () => {
  it("Draw xyz", () => {
    expect(drawXYZ(3)).toBe(`Y Z X \nZ Y X \nY Z X \n`);
  });
});
