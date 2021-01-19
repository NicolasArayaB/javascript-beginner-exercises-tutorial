
function bottlesOfMilk(remainigBottles) {
    let noMore = "no more bottles of milk on the wall. " +
    "No more bottles of milk on the wall, no more bottles of milk. "
    + "Go to the store and buy some more, 99 bottles of milk on the wall."
    
    if (remainigBottles == 1) {
        console.log(remainigBottles + " bottle of milk on the wall, " + remainigBottles + 
        "bottle of milk. Take one down and pass it around, " + noMore);
    }
    else
        console.log(remainigBottles + "bottles of milk on the wall, " + remainigBottles + 
        "bottles of milk. Take one down and pass it around, ");
}

for (let i = 99; i > 0; i--) {
    bottlesOfMilk(i); 
}