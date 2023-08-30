class Bird {
  fly() {
    console.log("I can Fly");
  }
}

class Duck extends Bird {
  quack() {
    console.log("I can quack");
  }
}

class Penguin extends Bird {
  fly(): void {
    throw new Error("I cant fly");
  }

  swim() {
    console.log("I can swim");
  }
}

export function makeBirdFly(bird: Bird) {
  bird.fly();
}

export const duck = new Duck();
//  another instance with Liskov substitution principle not working properly
// Bird class we are passing the sub class ... must be able to make it work propertly
// in this case the pinguin is not accomplished this principle correctly
export const penguin = new Penguin();
