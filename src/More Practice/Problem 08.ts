// Create a TypeScript program that declares a function that takes a string parameter with a literal type of "red", "green", or "blue", and an optional boolean parameter. If the boolean parameter is true, log the string parameter in uppercase. If the boolean parameter is false or not provided, log the string parameter in lowercase.

function processColor(color: "red" | "green" | "blue", optional?: boolean): void {
    if (optional) {
      console.log(color.toUpperCase());
    } else {
      console.log(color.toLowerCase());
    }
  }

  processColor("red", true);
  processColor("green"); 
  processColor("blue", false); 
  