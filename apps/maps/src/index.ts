/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

console.log("hi there");

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

const customMap = new CustomMap("map", 1);

customMap.addMarker(user);
customMap.addMarker(company);
