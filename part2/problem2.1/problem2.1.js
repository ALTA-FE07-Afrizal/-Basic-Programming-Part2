// input
let bilangan = 20;
// your code here
for (let i = 0; i < bilangan; i++){
    if (bilangan % i == 0) {
        console.log(i);
    }
}

i = 0
while (i < bilangan) {
    if (bilangan % i == 0) {
        console.log("ini faktor", i);
    }
    i++
}