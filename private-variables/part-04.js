/*
  The Module Design Pattern - using constructor function
*/

/*
  - milesDriven and speed are only accessible
    to the code inside the same block scope.
*/
function CarModule() {
  let milesDriven = 0;
  let speed = 0;

  // add new properties to the object being created
  this.accelerate = (amount) => {
    speed += amount;
    milesDriven += speed;
  };
  this.getMilesDriven = () => milesDriven;
}

// prepend the new keyword to the function call
const testCarModule = new CarModule();

console.log(testCarModule.__proto__ == CarModule.prototype);

testCarModule.accelerate(5);
testCarModule.accelerate(4);
console.log(testCarModule.getMilesDriven());
