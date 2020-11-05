/*
You are given 5 variables;
sharkDistance = distance from the shark to the pontoon.
The shark will eat you if it reaches you before you escape to the pontoon.
sharkSpeed = how fast it can move in metres/second.
pontoonDistance = how far you need to swim to safety in metres.
youSpeed = how fast you can swim in metres/second.
dolphin = a boolean, if true, you can half the swimming speed of
the shark as the dolphin will attack it.
The pontoon, you, and the shark are all aligned in one dimension.
If you make it, return "Alive!", if not, return "Shark Bait!".
 */
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    let a = pontoonDistance / youSpeed;
    let b = sharkDistance / sharkSpeed;
    if (dolphin){
        b = sharkDistance / (sharkSpeed / 2);
    } if (a < b){
        return 'Alive!';
    } else {
        return 'Shark Bait!';
    }
}