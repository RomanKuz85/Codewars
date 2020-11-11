/*
Given a list of digits, return the smallest number that could be formed
from these digits, using the digits only once (ignore duplicates).
 */
function minValue(values){
    let unique = values.filter((el, i) => i === values.indexOf(el));
    return +unique.sort((a, b) => a - b).join('');
}