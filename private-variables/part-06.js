/*
  Use WeakMap
*/

/*
  - A WeakMap only takes objects as keys but you can
    store anything as values.
  - When the object is garbage collected the value will
    be deleted
  - You can't iterate through a WeakMap
  - It makes accessing the variables from outside a bit
    difficult but NOT impossible. 
*/

class CarModule {
  constructor() {
    this.data = new WeakMap();
    this.data.set(this, {
      milesDriven: 0,
      speed: 0,
    });
  }

  accelerate(amount) {
    // In this version, we instead create a WeakMap and
    // use the "this" keyword as a key, which is not likely
    // to be used accidentally as a key to the WeakMap.
    const data = this.data.get(this);
    const speed = data.speed + amount;
    const milesDriven = data.milesDriven + speed;
    this.data.set(this, { speed, milesDriven });
  }

  getMilesDriven = () => this.data.get(this).milesDriven;
}

const testCarModule = new CarModule();
testCarModule.accelerate(5);
testCarModule.accelerate(4);
console.log(testCarModule.getMilesDriven());
//This data cannot be accessed easily from the outside.
console.log(testCarModule.data); //  WeakMap { [items unknown] }

// But not impossible
console.log(testCarModule.data.get(testCarModule));
