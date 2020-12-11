function vowelStart(str){
    return str.toLowerCase().replace(/[^A-Za-z0-9]/g, '').replace(/[aeuio]/g, el => ' '+el).trim();
}