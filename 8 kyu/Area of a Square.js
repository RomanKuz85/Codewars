/*
Complete the function that calculates the area of the red square,
when the length of the circular arc A is given as the input.
Return the result rounded to two decimals.
 */
function squareArea(A){
    let r = (2 * A) / Math.PI;
    let s = r * r;
    return +s.toFixed(2);
}