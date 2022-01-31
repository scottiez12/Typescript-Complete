class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}
  get(index: number): string {
    return this.collection[index];
  }
}

//so we can condense these classes into one...
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}

//notice how if we get rid of <string>, TS infers the type based on the argument passed in
new ArrayOfAnything<string>(["a", "b", "c"]);

//examples of generics with functions
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

//above functions condensed to one generic function
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

//same as above, notice that we can remove the <number> and TS will infer the type based on the arg passed
printAnything<number>([1, 2, 3, 4, 5]);

// generic constraints

class Car {
  print() {
    console.log("I am a car.");
  }
}

class House {
  s;
  print() {
    console.log("I am a house");
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}
