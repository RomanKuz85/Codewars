/*
Find the difference between the sum of the squares of the first n natural numbers
(1 <= n <= 100) and the square of their sum.
Example
For example, when n = 10:
The square of the sum of the numbers is:
(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)2 = 552 = 3025
The sum of the squares of the numbers is:
12 + 22 + 32 + 42 + 52 + 62 + 72 + 82 + 92 + 102 = 385
Hence the difference between square of the sum of the first ten natural numbers and
the sum of the squares of those numbes is: 3025 - 385 = 2640
 */
function differenceOfSquares(n){
    let x = 0;
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    while (x < n){
        x = x + 1;
        sum1 = sum1 + x;
        sum2 = x ** 2;
        sum3 = sum3 + sum2;
        if (x === n){
            sum1 = sum1 ** 2;
        }
    }
    return sum1 - sum3;

}