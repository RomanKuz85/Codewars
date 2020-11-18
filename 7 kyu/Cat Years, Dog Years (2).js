/*
I have a cat and a dog which I got as kitten / puppy.
I forget when that was, but I do know their current ages as catYears and dogYears.
Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]
NOTES:
Results are truncated whole numbers of "human" years
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
 */
var ownedCatAndDog = function(catYears, dogYears) {
    let catPeop = (catYears >= 0 && catYears <= 14) ? 0 : (catYears >= 15 && catYears <= 23) ? 1 : (catYears >= 24 && catYears <= 27) ? 2 : Math.floor(2 + (catYears - 24) / 4);
    let dogPeop = (dogYears >= 0 && dogYears <= 14) ? 0 : (dogYears >= 15 && dogYears <= 23) ? 1 : (dogYears >= 24 && dogYears <= 27) ? 2 : Math.floor(2 + (dogYears - 24) / 5);
    return [catPeop, dogPeop];
}