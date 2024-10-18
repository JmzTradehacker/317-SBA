// @ts-check

// Base Vehicle Class
class Vehicle {
    make: string;
    model: string;
    wheels: number | string; // String for "four" and number for others
    status: 'started' | 'stopped'; // Union type for valid statuses
  
    constructor(make: string, model: string, wheels: number | string) {
      this.make = make;
      this.model = model;
      this.wheels = wheels;
      this.status = 'stopped';
    }
  
    start(): void {
      this.status = 'started';
    }
  
    stop(): void {
      this.status = 'stopped';
    }
  }
  
  // Car Class Extending Vehicle
  class Car extends Vehicle {
    constructor(make: string, model: string) {
      super(make, model, 'four');
    }
  }
  
  // MotorCycle Class Extending Vehicle
  class MotorCycle extends Vehicle {
    constructor(make: string, model: string) {
      super(make, model, 2);
    }
  }
  
  // Print Status Function for a Vehicle
  function printStatus(vehicle: Vehicle): void {
    if (vehicle.status === 'started') {
      console.log('The vehicle is running.');
    } else {
      console.log('The vehicle is stopped.');
    }
  }
  
  // Testing Vehicle, Car, and MotorCycle Classes
  const myHarley = new MotorCycle('Harley-Davidson', 'Low Rider S');
  myHarley.start();
  printStatus(myHarley);
  
  // Fixed typo: 'toUppercase' should be 'toUpperCase'
  console.log(myHarley.make.toUpperCase());
  
  const myBuick = new Car('Buick', 'Regal');
  myBuick.wheels = (typeof myBuick.wheels === 'number') ? myBuick.wheels - 1 : myBuick.wheels;
  console.log(myBuick.wheels);
  console.log(myBuick.model);
  
  // Generic Class NCycle
  class NCycle<T> {
    make: T | T[];
    model: T | T[];
  
    constructor(make: T | T[], model: T | T[]) {
      this.make = make;
      this.model = model;
    }
  
    // Method to Print Single Item
    print(index: number = 0): void {
      if (Array.isArray(this.make) && Array.isArray(this.model)) {
        if (this.make[index] && this.model[index]) {
          console.log(`This NCycle has a ${this.make[index]} ${this.model[index]} at index ${index}.`);
        } else {
          console.log("This NCycle was not created properly.");
        }
      } else {
        console.log(`This is a ${this.make} ${this.model} NCycle.`);
      }
    }
  
    // Method to Print All Items
    printAll(): void {
      if (Array.isArray(this.make) && Array.isArray(this.model)) {
        this.make.forEach((m, index) => {
          console.log(`This NCycle has a ${m} ${this.model} at index ${index}.`);
        });
      } else {
        console.log(`This is a ${this.make} ${this.model} NCycle.`);
      }
    }
  }
  
  // Testing the NCycle Class
  const ncycle1 = new NCycle<string>('Yamaha', 'R1');
  ncycle1.print();
  
  const ncycle2 = new NCycle<string[]>(['Yamaha', 'Suzuki'], ['R1', 'GSX-R']);
  ncycle2.printAll();
  
  // Part 4: Test Cases
  const car = new Car('Toyota', 'Camry');
  car.start();
  printStatus(car);
  
  const motorcycle = new MotorCycle('Honda', 'CBR');
  motorcycle.stop();
  printStatus(motorcycle);
  
  // Testing NCycle class again (already declared)
  ncycle1.print();
  ncycle2.printAll();
  