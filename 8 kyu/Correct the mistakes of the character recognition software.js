/*
Your task is correct the errors in the digitised text.
You only have to handle the following mistakes:\
S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
 */
function swap(ch){
    let i = '015'.indexOf(ch)
    return 'OIS'[i];
}
function correct(string){
    return string.replace(/[015]/g, swap);
}