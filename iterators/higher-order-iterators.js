const delay = require("../shared/delay");
const customers = require("../shared/customers");

// higher order iterator
function delayed(delaySeconds, iterable) {
  return {
    [Symbol.asyncIterator]: function () {
      const itor = iterable[Symbol.asyncIterator]();
      const delayedIterable = {
        next: async () => {
          // perform additional logic
          await delay(delaySeconds * 1000);
          return itor.next();
        },
      };
      return delayedIterable;
    },
  };
}

// executed asynchronously
(async function () {
  const delayedCustomers = delayed(1, customers);
  const iterator = delayedCustomers[Symbol.asyncIterator]();
  const customer1 = (await iterator.next()).value;
  console.log("first customer: ", customer1);
  console.log("all customers:");
  for await (const customer of delayedCustomers) {
    console.log(customer);
  }
})(); // Immediately Invoked Function Expression (IIFE)

// you will see this first as it is executed synchronously
console.log("see me first");
