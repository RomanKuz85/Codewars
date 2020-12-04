function rotate(str){
    let arr = [];
    for(let i = 0; i < str.length; i++){
        str = str.slice(1) + str[0];
        arr.push(str);
    }
    return arr;
}