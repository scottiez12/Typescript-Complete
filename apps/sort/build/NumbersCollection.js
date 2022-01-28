"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    //similar to C#, this means we can get something as numbersCollection.length
    //as a property/field, not a method call
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        //easy to miss that this assignment at the bottom is leftHand not leftIndex
        this.data[rightIndex] = leftHand;
    }
}
exports.NumbersCollection = NumbersCollection;
