/*
Given two integers a and b, which can be positive or negative,
find the sum of all the numbers between including them too and return it.
If the two numbers are equal return a or b.

Note: a and b are not ordered!
 */

function getSum( a,b ){
    let c = 0;
    if (a > b){
        for (let i = b; i <= a; i++){
            c = c + i;
        }
    } else if (a === b){
        return a;
    } else {
        for (let i = a; i <= b; i++){
            c = c + i;
        }
    }
    return c;
}