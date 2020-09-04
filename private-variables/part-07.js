/*
  Use symbol
*/

/*
  Things to remember:
  - The variables are still not private just more
    difficult to access.
*/

class CarModule {
  constructor() {
    this.speedKey = Symbol("speedKey");
    this.milesDrivenKey = Symbol("milesDrivenKey");
    this[this.speedKey] = 0;
    this[this.milesDrivenKey] = 0;
  }

  accelerate(amount) {
    // It's virtually impossible for this data to be
    // accidentally accessed. By no means is it private,
    // but it's well out of the way of anyone who would
    // be implementing this module.
    this[this.speedKey] += amount;
    this[this.milesDrivenKey] += this[this.speedKey];
  }

  getMilesDriven() {
    return this[this.milesDrivenKey];
  }
}

const testCarModule = new CarModule();
testCarModule.accelerate(5);
testCarModule.accelerate(4);
console.log(testCarModule.getMilesDriven());

console.log(testCarModule.speed); // undefined

// we would need to access the internal
// keys to access the variable.
console.log(testCarModule[testCarModule.speedKey]);
