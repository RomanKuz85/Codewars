function isPalindrome(str) {
    if(str === null)
        return false;
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return str.split('').reverse().join('') === str;
}