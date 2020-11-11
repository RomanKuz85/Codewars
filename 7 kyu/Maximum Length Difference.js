/*
You are given two arrays a1 and a2 of strings. Each string is composed with
letters from a to z. Let x be any string in the first array and y be any string
in the second array.
Find max(abs(length(x) − length(y)))
If a1 and/or a2 are empty return -1 in each language except in
Haskell (F#) where you will return Nothing (None).
Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
 */
function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0){
        return -1;
    }
    let min1 = a1[0].length;
    let max1 = a1[0].length;
    for (let i = 0; i < a1.length; i++){
        if (a1[i].length > max1){
            max1 = a1[i].length;
        }
        if (a1[i].length < min1){
            min1 = a1[i].length;
        }

    }
    let min2 = a2[0].length;
    let max2 = a2[0].length;
    for (let i = 0; i < a2.length; i++){
        if (a2[i].length > max2){
            max2 = a2[i].length;
        }
        if (a2[i].length < min2){
            min2 = a2[i].length;
        }

    }

    return max1 - min2 > max2 - min1 ? max1 - min2 : max2 - min1;



}