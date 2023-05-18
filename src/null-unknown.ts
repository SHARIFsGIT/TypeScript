// Null
const myText = (text: string | null): void => {
    if (text === null){
        console.log("I've no text");
    }
    else{
            console.log(text);
        }
}

myText(null);
myText("This is a text");

// Unknown
const guessSometing = (myGuess: unknown): void => {
    console.log(myGuess);
}
guessSometing(null);
guessSometing(23);
guessSometing("This is a string");
guessSometing(true);
guessSometing(undefined);