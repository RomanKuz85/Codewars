/*
Raj was to move up through a pattern of stairs of a given number (n).
Help him to get to the top using the function stairs.
##Keep in mind :
If n<1 then return ' ' .
There are a lot of spaces before the stair starts except for pattern(1)
 */
function stairs(n){
    let s = '';
    for (let i = 1; i <= n; i++){
        s += ' '.repeat(n * 4 - i * 4);
        for (let j = 1; j <= i; j++) {

            s = s + (j % 10) + ' ';
        }
        for (let j = i; j >= 1; j--) {
            s = s + (j % 10) + ' ';
        }
        s = s.slice(0, -1);
        s += '\n';
    }
    return s.slice(0, -1);
}
