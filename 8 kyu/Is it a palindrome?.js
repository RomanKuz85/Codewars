/*
Write function isPalindrome that checks if a given string (case insensitive) is a palindrome.
In Racket, the function is called palindrome?
(palindrome? "nope") ; returns #f
(palindrome? "Yay")  ; returns #t
 */
function isPalindrome(x) {
    x = x.toLowerCase();
    let f = '';
    for (let i = 0; i < x.length; i++){
        f = x[i] + f;
    }
    return (f === x);
}