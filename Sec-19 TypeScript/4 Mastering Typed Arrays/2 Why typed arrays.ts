const carMakers = ["ford", "tata", "chevy"];
// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//prevent incompatible values
// carMakers.push(100);

//help with map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});
