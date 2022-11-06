// class Vehicle {
//   color: string = "red";
//   public honk(): void {
//     console.log("beep");
//   }
// }

// class Car extends Vehicle {
//   private drive(): void {
//     console.log(`vroom`);
//   }
//   startDrivingProcess(): void {
//     this.drive();
//   }
// }

// const car = new Car();
// car.startDrivingProcess();

/* 

********** Second way is using constructor ************

class Vehicle {
  color: string = "red";
  constructor(color: string) {
    this.color = color;
  }

  protected honk(): void {
    console.log("Beep");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

*/

/* 

********** third way is using public constructor ************

class Vehicle {
 
  constructor(public color: string) {
    
  }

  protected honk(): void {
    console.log("Beep");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

*/
