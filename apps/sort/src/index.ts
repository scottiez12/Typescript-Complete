import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedLists";

const numbersCollection = new NumbersCollection([10, 3, -5, 0, -20, 6, -1, 1]);
console.log(numbersCollection.data);
numbersCollection.sort();
console.log(numbersCollection.data);

console.log("---------------");

const charactersCollection = new CharactersCollection("konichiwa");
console.log(charactersCollection.data);
charactersCollection.sort();
console.log(charactersCollection.data);

console.log("---------------------");
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-3);
linkedList.add(-10);
linkedList.add(5);

linkedList.print();
linkedList.sort();
linkedList.print();
