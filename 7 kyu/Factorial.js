/*
Yor task is to write function factorial
 */
function factorial(n){
    let a = 1;
    let c = 1;
    while (c <= n){
        a = a * c;
        c++;
    }
    return a;
}