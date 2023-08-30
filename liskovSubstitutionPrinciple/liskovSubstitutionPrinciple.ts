/* 
 L - Liskov Substitution Principle
 If S is a subtype of T, then object of type T may be replaced with object of type S
 If you have an object/class (Animal) everywhere you use the animal class, you can replace it with one of its subclasses
 Dog that inherits from animal and the method should work as well.
*/

interface Shape {
  area: () => number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}
  setWidth(width: number): void {
    this.width = width;
  }
  setHeight(height: number): void {
    this.height = height;
  }
  area(): number {
    return this.width * this.height;
  }
}

class Square implements Shape {
  constructor(private sideLength: number) {}
  setSideLength(sideLength: number): void {
    this.sideLength = sideLength;
  }
  area() {
    return this.sideLength * this.sideLength;
  }
}

export function printArea(shape: Shape): void {
  console.log(`Area: ${shape.area()}`);
}

export const rectangle = new Rectangle(10, 2);
export const square = new Square(5);
