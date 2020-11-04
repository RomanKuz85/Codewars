/*
Create a function called factorial() that takes an integer argument and returns the factorial.

For example, inputting 5 should calculate 5! = 5 x 4 x 3 x 2 x 1 = 120
 */
function factorial(x){
    let c = 1;
    for (let i = x; i > 0; i--){
        c = c * i;
    }
    return c;
}