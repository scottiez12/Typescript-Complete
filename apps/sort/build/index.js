"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedLists_1 = require("./LinkedLists");
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0, -20, 6, -1, 1]);
console.log(numbersCollection.data);
numbersCollection.sort();
console.log(numbersCollection.data);
console.log("---------------");
const charactersCollection = new CharactersCollection_1.CharactersCollection("konichiwa");
console.log(charactersCollection.data);
charactersCollection.sort();
console.log(charactersCollection.data);
console.log("---------------------");
const linkedList = new LinkedLists_1.LinkedList();
linkedList.add(500);
linkedList.add(-3);
linkedList.add(-10);
linkedList.add(5);
linkedList.print();
linkedList.sort();
linkedList.print();
