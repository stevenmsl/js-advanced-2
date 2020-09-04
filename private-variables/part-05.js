/*
  ES6 Classes
*/

/*
  Things to remember
  - you still need to use scope to achieve true privacy
  - that means you have to place all variables inside 
    constructor to make them private
  - kind of defeat the purpose of using class syntax
*/

class CarModule {
  constructor() {
    let milesDriven = 0;
    let speed = 0;

    this.accelerate = (amount) => {
      speed += amount;
      milesDriven += speed;
    };

    this.getMilesDriven = () => milesDriven;
  }
}

const testCarModule = new CarModule();
testCarModule.accelerate(5);
testCarModule.accelerate(4);
console.log(testCarModule.getMilesDriven());
console.log(testCarModule.speed); // undefined -- We have true variable privacy now.
