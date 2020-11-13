/*
Sort array by last character
Complete the function to sort a given array or list by last character of elements.
Element can be an integer or a string.
Example:
['acvd', 'bcc']  -->  ['bcc', 'acvd']
The last characters of the strings are d and c. As c comes before d,
sorting by last character will give ['bcc', 'acvd'].
If two elements don't differ in the last character, then they should be sorted by
the order they come in the array.
 */
function sortMe(arr){
    let arrCopy = arr.slice();
    return arr.sort((a, b) => String(a)[String(a).length-1] > String(b)[String(b).length-1] ? 1 :
        (String(a)[String(a).length-1] === String(b)[String(b).length-1]) ? arrCopy.indexOf(a) - arrCopy.indexOf(b) : -1);
}