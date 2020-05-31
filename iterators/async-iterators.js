const customers = require("../shared/customers");

// executed asynchronously
(async function () {
  const iterator = customers[Symbol.asyncIterator]();
  const customer1 = (await iterator.next()).value;
  console.log("first customer: ", customer1);
  console.log("all customers:");
  for await (const customer of customers) {
    console.log(customer);
  }
})(); // Immediately Invoked Function Expression (IIFE)

// you will see this first as it is executed synchronously
console.log("see me first");
