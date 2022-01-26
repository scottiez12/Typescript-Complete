const carMakers = ["ford", "dodge", "chevy", "toyota"];

const dates = [new Date(), new Date(), new Date()];

const carsByMake = [["f150"], ["ram"], ["camaro"], ["corolla"]];

// help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
carMakers.push(100);

// help with array helpers
carMakers.map((car: string): string => {
  return car.toLowerCase();
});

// flexible types
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
importantDates.push("2030-11-11");
importantDates.push(new Date());
