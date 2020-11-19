/*
The goal is to create a function 'numberToPower(number, power)' that "raises" the number up
to power (ie multiplies number by itself power times).
Examples
numberToPower(3,2)  // -> 9 ( = 3 * 3 )
numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10,6) // -> 1000000
 */
function numberToPower(number, power){
    let s = number;
    let c = 1;
    if (power === 0){
        return 1;
    } else if (power === 1) {
        return number;
    } else {
        do{
            s = s * number;
            c++;
        } while (c < power);
        return s;
    }
}