/*
Simple, remove the spaces from the string, then return the resultant string.
 */
function noSpace(x){
    let a = '';
    for (let i = 0; i < x.length; i++){
        if (x[i] !== ' '){
            a += x[i];
        }
    }
    return a;
}