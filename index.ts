// Part 1: Converted JavaScript to TypeScript, added type annotations

// Base Vehicle Class
class Vehicle {
    make: string;
    model: string;
    status: 'started' | 'stopped'; // Union type for status
  
    constructor(make: string, model: string) {
      this.make = make;
      this.model = model;
      this.status = 'stopped'; // Default status
    }
  
    start() {
      this.status = 'started';
      console.log(`${this.make} ${this.model} has started.`);
    }
  
    stop() {
      this.status = 'stopped';
      console.log(`${this.make} ${this.model} has stopped.`);
    }
  }
  
  // Car and MotorCycle classes extending Vehicle
  class Car extends Vehicle {
    constructor(make: string, model: string) {
      super(make, model);
    }
  }
  
  class MotorCycle extends Vehicle {
    constructor(make: string, model: string) {
      super(make, model);
    }
  }
  
  // Function to print vehicle status
  function printStatus(vehicle: Vehicle): void {
    console.log(`The ${vehicle.make} ${vehicle.model} is currently ${vehicle.status}.`);
  }
  
  // Part 3: Generic Class NCycle
class NCycle<T> {
    make: T | T[];
    model: T | T[];
  
    constructor(make: T | T[], model: T | T[]) {
      this.make = make;
      this.model = model;
    }
  
    // Method to print information based on index
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
  
    // Method to print all makes and models if they are arrays
    printAll(): void {
      if (Array.isArray(this.make) && Array.isArray(this.model)) {
        this.make.forEach((m, index) => {
          console.log(`This NCycle has a ${m} ${this.model[index]} at index ${index}.`);
        });
      } else {
        console.log(`This is a ${this.make} ${this.model} NCycle.`);
      }
    }
  }