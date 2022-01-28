import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  //similar to C#, this means we can get something as numbersCollection.length
  //as a property/field, not a method call
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    //easy to miss that this assignment at the bottom is leftHand not leftIndex
    this.data[rightIndex] = leftHand;
  }
}
