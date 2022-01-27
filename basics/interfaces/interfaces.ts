interface Vehicle {
  name: string;
  year: Date;
  isBroken: boolean;
  summary(): string;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date("2000"),
  isBroken: true,
  summary(): string {
    return `Name is ${this.name}`;
  },
};

const drink = {
  color: "brown",
  isCarbonated: true,
  sugar: 45,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSubjectSummmary = (subject: Reportable): void => {
  console.log(subject.summary());
};

//printVehicle(oldCivic);
printSubjectSummmary(oldCivic);
printSubjectSummmary(drink);
