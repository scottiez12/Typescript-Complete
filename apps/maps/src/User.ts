import faker from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
  constructor() {
    this.name = faker.name.firstName(1);
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "blue";

  markerContent(): string {
    return `User name: ${this.name}`;
  }
}
