function drawXYZ(high) {
    let result = "";
    for (let i = 1; i <= high * high; i++) {
        let str = "";
        if (i % 3 == 0) {
            str += "X ";
        } else {
            if (i % 2 == 0) {
                str += "Z ";
            } else {
                str += "Y ";
            }
        }
        if (i % high == 0) str += "\n";
        result += str;
    }

    console.log(result);
}

drawXYZ(5);