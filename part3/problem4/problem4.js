function ubahHuruf(huruf) {
    let str = "";
    for (let i = 0; i < huruf.length; i++) {
        let ubahAscii = huruf.charCodeAt(i);
        if (ubahAscii >= 97 && ubahAscii <= 122) {
            str += String.fromCharCode(((ubahAscii - 97 + 10) % 26) + 97);
        } else if (ubahAscii >= 65 && ubahAscii <= 90) {
            str += String.fromCharCode(((ubahAscii - 65 + 10) % 26) + 65);
        } else {
            str += String.fromCharCode(ubahAscii)
        }
    }
    return str;
}

console.log(ubahHuruf("SEPULSA OKE"))     // COZEVCK YUO
console.log(ubahHuruf("ALTERRA ACADEMY")) // KVDOBBK KMKNOWI
console.log(ubahHuruf("INDONESIA"))       // SXNYXOCSK
console.log(ubahHuruf("GOLANG"))          // QYVKXQ
console.log(ubahHuruf("PROGRAMMER"))      // ZBYQBKWWOB
