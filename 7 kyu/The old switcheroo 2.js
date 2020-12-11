function swap(letter){
    letter = letter.toLowerCase();
    let alph = 'abcdefghijklmnopqrstuvwxyz';
    return alph.includes(letter) ? alph.indexOf(letter)+1 : letter;
}
function encode(str) {
    return str.replace(/./g, swap);
}