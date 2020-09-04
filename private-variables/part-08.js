/*
  TC39 private class field proposal
*/
class CarModule {
  #speed = 0;
  #milesDriven = 0;

  accelerate(amount) {
    // It's virtually impossible for this data to be
    // accidentally accessed.
    this.#speed += amount;
    this.#milesDriven += this.#speed;
  }

  getMilesDriven() {
    return this.#milesDriven;
  }
}

const testCarModule = new CarModule();
testCarModule.accelerate(5);
testCarModule.accelerate(4);
console.log(testCarModule.getMilesDriven());
console.log(testCarModule.speed);
// you can't access private field
console.log(testCarModule.#speed);
