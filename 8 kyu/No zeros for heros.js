/*
Numbers ending with zeros are boring.
They might be fun in your world, but not here.
Get rid of them. Only the ending ones.
 */
function noBoringZeros(n) {
    let a;
    while (n % 10 === 0 && n !== 0){
        a = n / 10;
        n = a;
    }
    return n;
}