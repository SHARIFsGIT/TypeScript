// Define a type alias called Coordinates that represents the latitude and longitude of a location. It should be an object with latitude and longitude properties, both of which are numbers. Create a variable of type Coordinates and assign some sample values to it.

type Coordinates = {
    latitude: number,
    longitude: number
}
const locations: Coordinates = {
    latitude: 40.71428571428571,
    longitude: -73.98571428571429
}
console.log(locations);