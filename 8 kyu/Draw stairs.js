/*
Given a number n, draw stairs using the letter "I",
n tall and n wide, with the tallest in the top left.
 */
function drawStairs(n) {
    if (n > 1){
        let str = ''
        for (let i = 1; i <n; i++){
            str +=`I\n${' '.repeat(i)}`
        }
        return str + 'I';
    } else {
        return 'I';
    }
}
