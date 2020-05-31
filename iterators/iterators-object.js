const makeDragon = require("../shared/make-dragon");
/*
  - iterator gives you the ability to have 
    infinite number of items to iterate through          
*/
// define a property name Symbol.iterator which is a function
// that returns a iterator
const dragonArmy = {
  // iterator factory
  // Symbol.iterator is just like the name of a property
  [Symbol]: () => {
    // return an object (iterator) which has a “next” property
    // (a function) to be called
    return {
      next: () => {
        const enoughDragonsSpawned = Math.random() > 0.75;
        if (!enoughDragonsSpawned) {
          return {
            value: makeDragon(),
            done: false,
          };
        }
        return { done: true };
      },
    };
  },
};

// get the default iterator
const iterator = dragonArmy[Symbol.iterator]();

console.log(`next dragon:`, iterator.next());

for (const dragon of dragonArmy) {
  console.log(dragon);
}
