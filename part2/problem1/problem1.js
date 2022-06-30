// input
let studentScore = 70;

// Process: Your Solution Code Here
switch (true) {
    case studentScore < 35:
        console.log("Nilai D");
        break;
    case studentScore < 50:
        console.log("Nilai C");
        break;
    case studentScore < 65:
        console.log("nilai B");
        break;
    case studentScore < 79:
        console.log("Nilai B+");
        break;
    default:
        console.log("Nilai A");
}
// Output
// Nilai A