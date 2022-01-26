//so the ': value' is the type annotation
const apples: number = 5;

let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

// arrays
let colors: string[] = ["red", "blue", "green"];
let numbers: number[] = [1, 2, 3, 4, 5];
let truths: boolean[] = [true, false, true, true];

// classes
class Car {}
let car: Car = new Car();

// object literals
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// functions
//so the annotation explains what the function takes as an arg (i: number), the arrow,
//and then a return type (void, in this case, because we're not returning anything)
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use annotations
// 1) function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
//note that JSON.parse() could return many different types, which is why it's inherently of 'any' type
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) when we declare a variable on one line and initialize it later
let words = ["red", "green", "blue"];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) when a type cannot be inferred correctly
let nums = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i > nums.length; i++) {
  if (nums[i] > 0) {
    numberAboveZero = nums[i];
  }
}
