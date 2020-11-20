/*
You have to write a function pattern which creates the following pattern upto n number of rows.
If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
##Pattern:
(n)
(n)(n-1)
(n)(n-1)(n-2)
................
.................
(n)(n-1)(n-2)....4
(n)(n-1)(n-2)....43
(n)(n-1)(n-2)....432
(n)(n-1)(n-2)....4321
 */
function pattern(n){
    var output = [];
    for (let i = n; i >= 1; i--){
        let str = '';
        for (let j = n; j >= i; j--){
            str += j;
        }
        output.push(str);
    }
    return output.join('\n');
}