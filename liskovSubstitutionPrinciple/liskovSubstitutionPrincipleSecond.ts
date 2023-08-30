class FlyingBird {
  fly() {
    console.log("I can Fly");
  }
}

class SwimmingBird {
  swim() {
    console.log("I can swim");
  }
}

class Duck extends FlyingBird {
  quack() {
    console.log("I can quack");
  }
}

class Penguin extends SwimmingBird {
  swim() {
    console.log("I can swim");
  }
}

export function makeFlyingBirdFly(bird: FlyingBird) {
  bird.fly();
}

export function makeSwimmingBirdSwim(bird: SwimmingBird) {
  bird.swim();
}

export const duck = new Duck();
export const penguin = new Penguin();

// de esta forma toda subclase va a poder utilizar las funciones de manera correcta sin falla
// Call function correctly
// A Duck can fly and swim ... create a thrid class using this ... Composition adding functionality instead of inherit funcionality is better to create .
// complex if you have inherit messy to right good code.
// Function be able to use correctly with the subclasses
