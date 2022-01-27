import faker from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  constructor() {
    (this.name = faker.company.companyName()),
      (this.catchPhrase = faker.company.catchPhrase()),
      (this.location = {
        lat: parseFloat(faker.address.latitude()),
        lng: parseFloat(faker.address.longitude()),
      });
  }

  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "green";

  markerContent(): string {
    return `<div>
    <h3>Company Name: ${this.name}<h3>
     <h4>Catch-Phrase: ${this.catchPhrase}</h4>
    </div> `;
  }
}
