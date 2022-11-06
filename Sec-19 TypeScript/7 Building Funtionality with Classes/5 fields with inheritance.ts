/*
class Vehicle {
  constructor(public color: string) {}
  protected honk(): void {
    console.log("Beep");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

class Car extends Vehicle {
  private drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car("red"); // this case we have to pass color name because child class right now using parent class constructor
car.startDrivingProcess();
*/

class Vehicle {
  constructor(public color: string) {}
  protected honk(): void {
    console.log("Beep");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(color: string) {
    super(color);
  } //if we have to define consturctor for child class we need to call super inside constructor and super refers to constructor of parent class
  private drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car("red"); // this case we have to pass color name because child class right now using parent class constructor
car.startDrivingProcess();
