// Define an enum called Color with values representing different colors (e.g., Red, Green, Blue). Create a function that takes a Color value as input and prints out a corresponding message (e.g., "You selected Red").

enum Color {
    Red = 'Red',
    Green = 'Green',
    Blue = 'Blue'
}

function printColor(color:Color): void {
    switch (color) {
        case Color.Red:
            console.log('You selected Red');
            break;
        case Color.Green:
            console.log('You selected Green');
            break;
        case Color.Blue:
            console.log('You selected Blue');
            break;
            default:
                console.log('Unknown color');
    }
}
const selectedColor: Color = Color.Blue;
printColor(selectedColor);