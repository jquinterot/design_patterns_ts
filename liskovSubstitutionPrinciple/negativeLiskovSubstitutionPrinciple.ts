/* 
 L - Liskov Substitution Principle
 If S is a subtype of T, then object of type T may be replaced with object of type S
 If you have an object/class (Animal) everywhere you use the animal class, you can replace it with one of its subclasses
 Dog that inherits from animal and the method should work as well.
*/

class Rectangle {
  public width: number;
  public height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  setWidth(value: number) {
    this.width = value;
  }

  setHeight(value: number) {
    this.height = value;
  }

  area() {
    return this.width * this.height;
  }
}

// The violation of LSP occurs due to the way Square overrides the setWidth and setHeight methods.
// The violation occurs because the Square class changes the behavior of methods (setWidth and setHeight) inherited from the base class (Rectangle).
// This violates the contract defined by the base class and leads to inconsistencies when using objects interchangeably, thus breaking the Liskov Substitution Principle.
class Square extends Rectangle {
  setWidth(value: number): void {
    this.width = value;
    this.height = value;
  }
  setHeight(value: number): void {
    this.width = value;
    this.height = value;
  }
}

// so if we use the square instance here the method should work as well
// But if we use a square we are breaking the principle cause the function is not compatible with all the Rectangle instances
// cause in reality we want to increase the width ... not the height as well so it is not compatible with all the Rectangle instances
// example: Square(6, 5) is the idea but we are passing 6, 6 so it
export function increaseReactangleWidth(rectangle: Rectangle) {
  rectangle.setWidth(rectangle.width + 1);
}

export const rectangle1 = new Rectangle(10, 2);
//  if we notice this rectangle is a square cause both side has the same width and height
//  so we should change it to a square
export const rectangle2 = new Rectangle(5, 5);
export const square = new Square(5, 5);
