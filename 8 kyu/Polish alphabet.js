/*
There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.
Your task is to change the letters with diacritics:
 */
function swap(ch){
    let i = 'ąćęłńóśźż'.indexOf(ch);
    return 'acelnoszz'[i];
}
function correctPolishLetters(string){
    return string.replace(/[ąćęłńóśźż]/g, swap);
}