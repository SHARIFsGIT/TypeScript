// Create a base class called Shape with a method calculateArea that returns the area of the shape. Extend this class to create subclasses for specific shapes like Rectangle and Circle. Implement the calculateArea method in each subclass and test it with different dimensions.

abstract class ShapeP {
    abstract calculateArea(): number;
}
class RectangleP extends ShapeP {
    constructor(private width: number, private height: number) {
        super();
    }
    calculateArea() {
        return this.width * this.height;
    }
}

class CircleP extends ShapeP {
    constructor(private radius: number) {
        super();
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}
const rectangele = new RectangleP(10, 10);
console.log(rectangele.calculateArea());

const circle = new CircleP(2);
console.log(circle.calculateArea());