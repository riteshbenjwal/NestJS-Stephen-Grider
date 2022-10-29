// when to use annotations
// ---> 3) variable whose type cannot be inferred correctly
// let numbers = [-10, -1, 12];
// let numberAboveZero = false;  ---> type boolean

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 0) {
//     numberAboveZero = numbers[i]; ---> assigning number shows error
//   }
// }

let numbers = [-10, -1, 12];
let numberAboveZero: number | boolean = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
