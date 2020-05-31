const createStore = require("../shared/fake-store-async");
const store = createStore();

const customers = {
  // async iterable
  [Symbol.asyncIterator]: function () {
    let i = 0;
    {
      // You are returning an iterable, an object with next method
      return {
        // return a promise
        next: async function () {
          i++;
          const customer = await store.get("customer", i);
          if (!customer) {
            return { done: true };
          }
          customer.foods = await store.get("food", i);
          return {
            value: customer,
            done: false,
          };
        },
      };
    }
  },
};

module.exports = customers;
