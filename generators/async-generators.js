const createStore = require("../shared/fake-store-async");
const store = createStore();

const customers = {
  // async iterable
  [Symbol.asyncIterator]: async function* () {
    let i = 0;
    {
      while (true) {
        i++;
        const customer = await store.get("customer", i);
        if (!customer) {
          i = 0; // Go back to retrieve the first record again
        } else {
          yield customer;
        }
      }
    }
  },
};

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
