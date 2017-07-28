function fibo () {
let sn = Number(prompt("Enter the Fibonacci sequence number"));
var nn, i;
var fibo = [1, 1];
for (i = 2; i < sn; i++) {
    nn = fibo[i - 1] + fibo[i - 2];
    fibo.push(nn);
}
document.write(fibo[sn - 1]);
}