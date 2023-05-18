const isHeroFree: boolean = true;
if (isHeroFree) {
    console.log("Fix the date");
}
else {
    console.log("No date available");
}

// But we can do this with less lines
const isHeroAvailable: boolean = false;
const checkAvailability = isHeroAvailable? "Take a date for shooting" : "No date available";
console.log(checkAvailability);