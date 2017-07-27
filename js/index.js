let sn = Number(prompt("Enter the Fibonacci sequence number"));
function fb(sn) {
    var n1 = 1,
        n2 = 1,
        p = 2;

    if (sn === 1 || sn === 2) {
        return n1;
    }
    else {
        while (p < sn) {
            n1 += n2;
            n2 = n1 - n2;
            p++;
        }
    }
    return n1;
}
document.write(fb(sn));



