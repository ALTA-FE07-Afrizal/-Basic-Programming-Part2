const { ubahHuruf } = require("./problem4");

describe("Test Ubah Huruf", () => {
  it("Dari GOLANG jadi QYVKXQ", () => {
    expect(ubahHuruf("GOLANG")).toBe("QYVKXQ");
  });
  it("Dari ALTERRA ACADEMY jadi KVDOBBK KMKNOWI", () => {
    expect(ubahHuruf("ALTERRA ACADEMY")).toBe("KVDOBBK KMKNOWI");
  });
  it("Dari abc jadi klm", () => {
    expect(ubahHuruf("abc")).toBe("klm");
  });
});
