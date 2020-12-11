function encode(string){
    return string.replace(/[aeiou]/g, el => ' aeiou'.indexOf(el))
}

function decode(string) {
    return string.replace(/[1-5]/g, el => ' aeiou'[el]);
}