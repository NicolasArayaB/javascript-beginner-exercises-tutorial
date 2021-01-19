
function sing() {
    let lyrics = "";
    // "Whisper" is missing on the expected lyrics. Bug reported.
    lyrics += letItBe(4) + "whisper words of wisdom, " + letItBe(5) + "there will be an answer, let it be";
    return lyrics;
}

function letItBe(repeat) {
    let letItBe = ""
    for (let i = 0; i < repeat; i++) {
        letItBe += "let it be, ";
    }
    return letItBe;
}
//Your code above ^^^

console.log(sing());