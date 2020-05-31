const delay = require("./delay");
module.exports = function createStore() {
  const tables = {
    customer: {
      1: { name: "Steven" },
      2: { name: "Arlo" },
      3: { name: "Cindy" },
    },
    food: {
      1: ["vegi", "noodles"],
      2: ["beef", "seafood"],
      3: ["fruit"],
    },
  };
  return {
    // return a promise
    get: (table, id) => delay(100).then(() => tables[table][id]),
  };
};
