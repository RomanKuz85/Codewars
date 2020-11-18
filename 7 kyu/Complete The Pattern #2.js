/*
You have to write a function pattern which returns the following Pattern
(See Pattern & Examples) upto n number of rows.
Note: Returning the pattern is not the same as Printing the pattern.
Rules/Note:
If n < 1 then it should return "" i.e. empty string.
There are no whitespaces in the pattern.
pattern(4):
4321
432
43
4
 */
function pattern(n){
    let output='';
    let str = [];
    for (let i = n; i >= 1; i--){
        str.push(i);
    }
    while (str.length > 0){
        output += str.join('') + `\n`;
        str = str.slice(0, -1)
    }
    return output.slice(0, -1);
}