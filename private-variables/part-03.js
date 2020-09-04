/*
  The Module Design Pattern
*/

/*
  - milesDriven and speed are only accessible
    to the code inside the same block scope.
*/
const CarModule = () => {
  let milesDriven = 0; // function-scoped
  let speed = 0;

  const accelerate = (amount) => {
    speed += amount;
    milesDriven += speed;
  };

  const getMilesDriven = () => {
    return milesDriven;
  };

  // Using the "return" keyword, you can control what gets
  // exposed and what gets hidden. In this case, we expose
  // only the accelerate() and getMilesDriven() function.
  return {
    accelerate,
    getMilesDriven,
  };
};

const testCarModule = CarModule();
testCarModule.accelerate(5);
testCarModule.accelerate(4);
console.log(testCarModule.getMilesDriven());
