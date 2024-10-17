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
  
  