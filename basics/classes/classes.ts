class Vehicle {
  // public drive(): void {
  //   console.log("vroom");
  // }

  // color: string;
  // constructor(color: string) {
  //   this.color = color;
  // }
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep beep");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("chug chug");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle("green");
console.log(vehicle.color);

const car = new Car(4, "blue");
//car.drive();
car.startDrivingProcess();
