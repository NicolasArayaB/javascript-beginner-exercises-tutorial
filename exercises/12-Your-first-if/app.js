var total = prompt('How many km are left to go?');

// Your code below:
let totalInt = parseInt(total);
if (totalInt > 100)
    console.log("We still have a bit of driving left to go");

else if (totalInt > 50 || totalInt <= 100)
    console.log("We'll be there in 5 minutes");

else (totalInt <= 50)
    console.log("I'm parking. I'll see you right now");
