/*
Given a positive integer n, calculate the following sum:
n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.
Example
25  =>  25 + 12 + 6 + 3 + 1 = 47
 */
function halvingSum(n) {
    let c = 0;
    let s = n;
    do {
        c = c + s;
        s = Math.floor(s / 2);
    } while (s > 0);
    return c;
}