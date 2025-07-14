// Task 1
let inputString1 = "Code";
let firstCodePoint = inputString1.charCodeAt(0);   
let thirdCodePoint = inputString1.charCodeAt(2);   

// Task 2
let wordFromCodePoints = String.fromCharCode(72, 101, 108, 108); 

// Task 3
let inputString2 = "Launch";
let firstCharCode = inputString2.charCodeAt(0); 
let lastCharCode = inputString2.charCodeAt(inputString2.length - 1); 
let swappedString = 
  String.fromCharCode(lastCharCode) + 
  inputString2.slice(1, -1) + 
  String.fromCharCode(firstCharCode); 


console.log({
  firstCodePoint,
  thirdCodePoint,
  wordFromCodePoints,
  swappedString,
});

