// when to use annotations
// ---> 2) when we declare a variable on one line and initalize it later
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true; //any if we don't give type or value during initialisation
  }
}
