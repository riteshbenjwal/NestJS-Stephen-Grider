// when to use annotations
// ---> 1) function that returns the any type

// const json = '{"x": 10, "y": 20}';
// const coordinates = JSON.parse(json); //ts can't predict the type for json.parse

// console.log(coordinates);

// JSON.parse returns different values for diff inputs so typescript can't predict the output so it uses any type

//Fix

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(coordinates);
