function CalculateString( n,  nums){
    let ones = 0;
    for(el of nums){
        if (el === '1'){
            ones++;
        }
    }
    let zeros = n - ones;
    return Math.abs(ones - zeros);
}