// class GenPerson {
//     takeNap(){
//         console.log('I sleep for 8 hours');
//     }
// }
// class Student extends GenPerson {
//     takeNap(): void{
//         console.log('I sleep for 7 hours');
//     }
// }
// class Developer extends GenPerson {
//     takeNap(): void{
//         console.log('I sleep for 9 hours');
//     }
// }
// function getNap(param: GenPerson){
//     param.takeNap();
// }
// const person1 = new GenPerson();
// const person2 = new Student();
// const person3 = new Developer();
// getNap(person1);
// getNap(person2);
// getNap(person3);

class Shape{
    getArea(): number{
        return 0;
    }
}
class Circle extends Shape{
    radius: number
    constructor(radius: number){
        super();
        this.radius = radius;
    }
    getArea(): number{
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape{
    height: number
    width: number
    constructor(height: number, width: number){
            super();
            this.height = height;
            this.width = width;
        }
        getArea(): number{
            return this.height * this.width;
        }
}
function getAreaOfShape(param: Shape){
    console.log(param.getArea());
}
getAreaOfShape(new Circle(10));
getAreaOfShape(new Rectangle(10,10));