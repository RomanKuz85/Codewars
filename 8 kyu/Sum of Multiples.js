/*
Find the sum of all multiples of n below m
 */
function sumMul(n,m){
    let c = 0;
    for (let i = n; i < m; i++){
        if(i % n === 0){
            c = c + i;
        }
    }
    return c === 0 || n === 0 && b === 0 ? 'INVALID' : c;
}